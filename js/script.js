
/* this is all from lab mostly */
function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null)
    {
    page_style = "css/style.css";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}
function light_mode()
{
    localStorage.setItem("page_stylesheet_name", "css/alt_style.css");
    load_style();
}
function dark_mode()
{
    localStorage.setItem("page_stylesheet_name", "css/style.css");
    load_style();
}
load_style() // load style immediately
