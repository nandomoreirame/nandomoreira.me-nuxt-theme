require 'rubygems'

desc "Remove folder /build"
task :clean do
  sh "rm -rf build/"
end

desc "Middleman build"
task :build do
  sh "middleman build"
end

desc "Middleman deploy"
task :deploy => [:clean, :build] do
  sh "middleman deploy"
end
