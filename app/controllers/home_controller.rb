class HomeController < WebController
  inherit_resources
  # before_filter :require_login
  respond_to :html, :json, :xml


  def index
    contents = '<h1>Welcome to rGular</h1>'
    contents = "
    <head>
    <style>

    .center {
        position: absolute;
        top: 40%;
        left: 40%;

        background-color: #4CAF50;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        border: none;
        display: inline-block;
        outline: 0;
        padding: 6px 16px;
        vertical-align: middle;
        overflow: hidden;
        text-decoration: none !important;
        color: #fff;
        text-align: center;
        cursor: pointer;
        white-space: nowrap;
    }​
    </style>
    </head>

    <body>
      <div class='fullscreenDiv'>
            <div class='center'>
              <h1>Welcome to rGular</h1>
            </div>
      </div>​
    </body>

    "

    render :text => contents
  end

end

