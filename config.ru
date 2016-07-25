require 'rubygems'
require 'middleman/rack'
require "rack/contrib/try_static"
require 'rack/rewrite'
require 'slim'

Slim::Engine.disable_option_validator!

# Build the static site when the app boots
`bundle exec middleman build`

use Rack::Rewrite do
  r301 %r{.*}, 'http://nandomoreira.me$&', :if => Proc.new { | rack_env |
    rack_env['SERVER_NAME'] != 'nandomoreira.me'
  }
end

# Enable proper HEAD responses
use Rack::Head
# Attempt to serve static HTML files
use Rack::TryStatic,
    :root => "build",
    :urls => %w[/],
    :try => ['.html', 'index.html', '/index.html']

# Serve a 404 page
run lambda { |env|
  [
    404,
    {
      "Content-Type" => "text/html",
      "Cache-Control" => "public, max-age=60"
    },
    File.open("build/404.html", File::RDONLY)
  ]
}
