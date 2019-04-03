# General config
# http://localhost:4567/__middleman

# Import custom libraries and helpers
Dir['./*/*.rb'].each { |file| load file }
include FaviconsHelper

# Load Sass from node_modules
config[:sass_assets_paths] << File.join(root, 'node_modules')

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

# Set favicons
set :favicons, [
  {
    rel: 'apple-touch-icon',
    size: '180x180',
    icon: 'apple-touch-icon.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    size: '32x32',
    icon: 'favicon32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    size: '16x16',
    icon: 'favicon16x16.png'
  },
  {
    rel: 'shortcut icon',
    size: '64x64,32x32,24x24,16x16',
    icon: 'favicon.ico'
  }
]

activate :autoprefixer do |config|
  config.browsers = 'last 2 versions'
end

activate :external_pipeline,
         name: :webpack,
         command: build? ? 'yarn run build' : 'yarn run start',
         source: 'dist',
         latency: 1

activate :dotenv
activate :meta_tags
activate :directory_indexes

page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

configure :development do
  set      :debug_assets, true
  activate :livereload
  activate :pry
end

configure :build do
  ignore   File.join(config[:js_dir], '*') # handled by webpack
  set      :asset_host, @app.data.site.host
  set      :relative_links, true
  activate :asset_hash
  # activate :favicon_maker, icons: generate_favicons_hash
  activate :gzip
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  activate :relative_assets
  activate :robots, rules: [{ user_agent: '*', allow: %w[/] }],
                    sitemap: File.join(@app.data.site.host, 'sitemap.xml')
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.remote        = 'git@github.com:aquellier/Visit_morocco.git'
  deploy.branch        = 'gh-pages'
  # deploy.build_before  = true
end

# ['marrakech_chegaga', 'high_atlas_mountains',
#  'toubkal_mulhacen', 'imperial_cities'].each do |name|
#   proxy "/tours/#{name}.html",
#         '/tours/template.html',
#         locals: { tour_name: name }
# end
