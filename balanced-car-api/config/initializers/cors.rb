# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      # Specify which origins are allowed to make CORS requests
      origins 'localhost:3001', 'example.com'
  
      # Specify which resources are allowed and which methods and headers are supported
      resource '/api/*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        expose: ['X-Total-Count', 'Link'], # Optional: specify which response headers are exposed to the browser
        max_age: 86400 # Optional: specify how long the preflight request cache should last
    end
  end