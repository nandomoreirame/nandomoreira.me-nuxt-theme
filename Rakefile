# encoding: UTF-8
require 'rubygems'

desc "Middleman build"
task :build do
  puts "\nBuilding project"
  try "middleman build"
end

desc "Middleman deploy"
task :deploy do
  puts "\nDeploying to GitHub"
  try "middleman deploy"
end

namespace :travis do
  task :script do
    Rake::Task["build"].invoke
  end

  task :after_success do
    try "./travis-deploy.sh"
  end
end

## Helper so we fail as soon as a command fails.
def try(command)
  system command
  if $? != 0 then
    raise "Command: `#{command}` exited with code #{$?.exitstatus}"
  end
end

SOURCE = "source/"
CONFIG = {
  'posts' => File.join(SOURCE, "posts"),
  'post_ext' => "md.erb"
}

desc "Begin a new post in #{CONFIG['posts']}"
task :post do
  abort("rake aborted: '#{CONFIG['posts']}' directory not found.") unless FileTest.directory?(CONFIG['posts'])
  title = ENV["title"] || "New post"

  # slug do post
  slug = mount_slug(title)

  begin
    date = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%Y-%m-%d')
    time = (ENV['date'] ? Time.parse(ENV['date']) : Time.now).strftime('%T')
  rescue => e
    puts "Error - date format must be YYYY-MM-DD, please check you typed it correctly!"
    exit -1
  end

  filename = File.join(CONFIG['posts'], "#{date}-#{slug}.#{CONFIG['post_ext']}")
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end

  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "title: \"#{title.gsub(/-/,' ')}\""
    post.puts "date: #{date} #{time}"
    post.puts "comments: true"
    post.puts "description:"
    post.puts "categories:"
    post.puts " -"
    post.puts "tags:"
    post.puts " -"
    post.puts "---"
  end
end # task :post

def mount_slug(title)
  slug = str_clean(title)
  slug = slug.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  return slug
end

def str_clean(title)
  return title.tr("ÀÁÂÃÄÅàáâãäåĀāĂăĄąÇçĆćĈĉĊċČčÐðĎďĐđÈÉÊËèéêëĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħÌÍÎÏìíîïĨĩĪīĬĭĮįİıĴĵĶķĸĹĺĻļĽľĿŀŁłÑñŃńŅņŇňŉŊŋÒÓÔÕÖØòóôõöøŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšſŢţŤťŦŧÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųŴŵÝýÿŶŷŸŹźŻżŽž", "AAAAAAaaaaaaAaAaAaCcCcCcCcCcDdDdDdEEEEeeeeEeEeEeEeEeGgGgGgGgHhHhIIIIiiiiIiIiIiIiIiJjKkkLlLlLlLlLlNnNnNnNnnNnOOOOOOooooooOoOoOoRrRrRrSsSsSsSssTtTtTtUUUUuuuuUuUuUuUuUuUuWwYyyYyYZzZzZz")
end
