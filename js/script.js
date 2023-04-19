var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.81672, lng: -87.85159 },
    zoom: 14,
  });

  const info = '<div class="googleMapsInfo"><h2>Galloping Ghost</h2><p>The GALLOPING GHOST ARCADE provides a video gaming experience like no other! We are the LARGEST video arcade in the USA, and currently have over 885+ games to play and have more games up and running all the time! Unlike most arcades, we do not use quarters or tokens. All of our games are set to FREE PLAY! We charge a $25 door fee and then you can come in and play ALL the games for as long as you want! We are open until 2AM on Friday and Saturday and until 12am during the week (EVERYDAY including all holidays)! We offer Weekly, Monthly, Yearly & Lifetime Memberships as well! We are also one of the most reputable arcades for tracking high scores and world records. We currently have over 600+ World Records set here!</p></div>';

  const arcade = {
    url: "media/logo.jpg",
    scaledSize: new google.maps.Size(36, 36)
  };

  const gga = new google.maps.Marker ({
    position: {lat: 41.81672, lng: -87.85159 },
    map,
    icon: arcade,
    animation: google.maps.Animation.DROP,
    title: "Galloping Ghost Arcade",
  });

  const ggaInfo = new google.maps.InfoWindow ({
    content: info,
  })

  gga.addListener("click", () => {
    ggaInfo.open(map, gga);
  })
}

/*picture slider script*/
$(document).ready(function(){
    $('.slider').bxSlider({
      slideWidth:400
    });
});