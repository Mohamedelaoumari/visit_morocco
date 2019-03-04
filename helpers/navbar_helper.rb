module NavbarHelper
  def homepage?
    current_page.path == 'index.html'
  end
end
