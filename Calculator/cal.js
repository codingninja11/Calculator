function add()
{
    document.f.res.value=parseInt(document.f.fn.value)+parseInt(document.f.sn.value);
}
function sub()
{
    document.f.res.value=parseInt(document.f.fn.value)-parseInt(document.f.sn.value);
}
function mul()
{
    document.f.res.value=parseInt(document.f.fn.value)*parseInt(document.f.sn.value);
}
function div()
{
    document.f.res.value=parseInt(document.f.fn.value)/parseInt(document.f.sn.value);
}
function mod()
{
    document.f.res.value=parseInt(document.f.fn.value)%parseInt(document.f.sn.value);
}
function cls()
{
    document.f.res.value=document.f.fn.value=document.f.sn.value="";
}