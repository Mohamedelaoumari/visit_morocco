module NavigationHelper
  def homepage?
    current_page.path == 'index.html'
  end

  def tour_show_name
    current_page.path[6..-6]
  end

  def selected_tour
    data.tours.find { |tour| tour.slug == tour_show_name }
  end
end
