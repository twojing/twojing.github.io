require 'rack/contrib/try_static'

use Rack::TryStatic,
  :root => ".",
  :urls => %w[/],
  :try => ['.html', 'index.html', '/index.html']

run(-> (env) { [404, {'Content-Type' => 'text/html'}, 'Not found'.lines] })
