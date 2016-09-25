###
# Helpers
###

module CustomHelpers
  def local_path(path, options={})
    lang = options[:language] ? options[:language] : I18n.locale.to_s

    if lang != "en"
      "/#{lang}/#{path}"
    else
      "/#{path}"
    end
  end

  def other_langs
    langs - [I18n.locale]
  end

  def youtube(video_id, video_width= 560, video_height=420)
    video = "<div class=\"responsive-video\"><iframe width=\"#{video_width}\" height=\"#{video_height}\" src=\"//www.youtube.com/embed/#{video_id}?color=white&theme=light\"></iframe></div>"
  end
end
