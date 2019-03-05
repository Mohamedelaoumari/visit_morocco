module NavigationHelper
  def homepage?
    current_page.path == 'index.html'
  end

  def tour_show_page
    current_page.path[6..-6]
  end
end
