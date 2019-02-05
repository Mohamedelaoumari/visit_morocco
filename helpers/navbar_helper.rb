module NavbarHelper
  def nav_link(title, path, options = {})
    options[:class] = (options[:class] or '').split(' ')
    options[:class] << 'active' if current_page?(path)
    options[:class] = options[:class].join(' ')

    link = link_to(title, path)
    content_tag(:li, link, options)
  end

  def current_page?(path)
    current_page.url.chomp('/') == path.chomp('/')
  end
end
