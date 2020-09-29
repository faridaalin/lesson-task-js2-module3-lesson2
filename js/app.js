const baseUrl = `http://localhost:1337/hotels/`;

const getdata = async (baseUrl) => {
  try {
    const resp = await fetch(baseUrl);
    const data = await resp.json();
    renderHotels(data);
  } catch {
    console.log(error);
  }
};

getdata(baseUrl);

const renderHotels = (hotels) => {
  const container = document.querySelector(".card-container");
  const base = `http://localhost:1337`;

  hotels.forEach((hotel) => {
    container.innerHTML += `<div class="col-sm">
                                <div class="card border-0 rounded mt-4" style="width: 18rem;">
                                    <a href="hotel.html">
                                     <div class="bg-img embed-responsive embed-responsive-4by3 rounded-top"
                                            style="background-image: url(${base}${hotel.images[0].url})">
                                        </div>
                                 </a>

                                    <div class="card-body rounded-bottom">
                                        <p class="category">${hotel.categories.name}</p>
                                        <a class="card-title" href="hotel.html">${hotel.name}</a>

                                 </div>
                             </div>
                            </div>`;
  });
};
