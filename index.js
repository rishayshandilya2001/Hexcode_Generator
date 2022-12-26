function changecolor()
{
    let s='0123456789ABCDEF'
    const list=s.split('')
    var c='#'
    for(let i=0;i<6;++i)
    {
        c+=list[Math.floor(Math.random()*(list.length))]
    }
    console.log(c)
    document.querySelector('#hexcode').innerHTML=c
    document.querySelector('body').style.backgroundColor=c
}