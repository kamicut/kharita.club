import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map'),  {
  ssr: false
})

export default () => {
  return (
    <div className="ml3">
    <header className="bb">
        <h1 className="dark-gray">kharita.club - خريطة كلوب</h1>
    </header>
    <div className="flex">
        <div className="w-25-ns pt4">
          <Map />
        </div>
        <div className="w-50-ns pa4">
        <div className="mb4">
            <h2 className="f3 mid-gray lh-title">About</h2>
            <p className="f5 lh-copy ">Kharita Club is a repository of open mapping projects in Lebanon. We mainly use OpenStreetMap and OSM tools. Join our community!</p>

        </div>
        <div className="mb4">
            <h2 className="f3 mid-gray lh-title">Projects</h2>
            <ul>
              <li>Quarries in Lebanon</li>
              <li>Administrative Boundaries</li>
              <li>Arabic translation of <a href="https://github.com/osmfoundation/welcome-mat">OSM Welcome Mat</a></li>
            </ul>
        </div>
        <div className="mb4">
            <h2 className="f3 mid-gray lh-title">Events</h2>
            <ul>
              <li>Bread & Net</li>
              <li>Mapathon</li>
            </ul>
        </div>
        <div class="mb4">
            <form className="mid-gray center" action="https://tinyletter.com/kharitaclub" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/kharitaclub', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
              <p>
                <label for="tlemail">Enter your email address to get updates :)</label>
              </p>
              <p>
                <input type="text" style={{"width":"140px"}} name="email" id="tlemail" />
              </p><input type="hidden" value="1" name="embed" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}