###
# Helpers
###

module CustomHelpers
  def youtube(video_id, video_width= 560, video_height=420)
    video = "<div class=\"responsive-video\"><iframe width=\"#{video_width}\" height=\"#{video_height}\" src=\"//www.youtube.com/embed/#{video_id}?color=white&theme=light\"></iframe></div>"
    return video
  end
end
