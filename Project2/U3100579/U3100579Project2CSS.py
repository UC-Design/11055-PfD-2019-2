cssfile = open("style.css", "w")

css_format = """@charset "UTF-8";
    body {
        background-color: #BDB5AA;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px
        margin-bottom: 100px;
        text-align: center;
        color: #000100;
    }
    p {
        font-family: "courier new";
        font-size: 16px;
    }
    a:link, a:visited {
        background-color: #87DE87;
        color: white;
        padding: 14px 25px;
        margin-top: 50px
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    a:hover, a:active {
        background-color: #77C477;
    }

    img {
        margin-top: 200px;
        margin-bottom: 50px; 
    }"""
cssfile.write(css_format)
cssfile.close()
