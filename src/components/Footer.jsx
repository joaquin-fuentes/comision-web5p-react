import Swal from "sweetalert2";

export default function footer() {
    
    function hundleredes(nombreRed){
        Swal.fire({
              title: "Bien hecho!",
              text: `Cliqueaste en ${nombreRed}`,
              icon: "success",
            });
    }
  return (
    <footer class="bg-danger"><div class="container text-center bg-secondary">
  <div class="row">
    <div class="col">
      <div><img src="https://imgs.search.brave.com/J1Pm_mAZs_FpXtGEbIc81iHCNGMPSHSJXm13LU1clfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzExLzIvcHJvdGVj/LWluZm9ybWF0aWNh/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTExMzAz/OC5wbmc"></img></div>
    </div>
    <div class="col order-2">
            <div class="container text-center">
                <div class="row">
                    <div class="col-6 col-sm-4 text-danger fw-bold"><a href="#">Incio</a></div>

                    <div class="w-100 d-none d-md-block">
                        <div class="col-6 col-sm-4"><a href="#">Categorías</a></div>
                        <div class="col-6 col-sm-4"><a href="#">Medios de pago</a></div>
                        <div class="col-6 col-sm-4"><a href="#">Galería</a></div>
                    </div> 
                </div>

                

            </div>
    </div>
    <div class="col order-3">
            <div class="row">
                    <div class="col-6 text-danger fw-bold">Contáctanos</div>
                  <div class="w-100 d-none d-md-block">
                    <div class="col-6"><a href="#">+54 9 381 325-45621</a></div>
                    <div class="col-6"><a href="#">usuario123@gmail.com</a></div>
                  </div>

                </div>
    </div>
    <div class="col order-4">
        <div className="redes-sociales">
            <div class="container text-center">
                <div class="row row-cols-2">
                    <div class="col"><a href="#" onClick={() => hundleredes("Facebook")}><img src="https://imgs.search.brave.com/tQngT1UmSmEh9hh9Znlp7pqX9Q9N9gixCZU-U4ti_xs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bWFyY2FzLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8x/Mi9GYWNlYm9vay1M/b2dvdGlwby02MDB4/MzM4LmpwZw" alt="Logo-Facebook"/></a></div>
                    <div class="col"><a href="#" onClick={() => hundleredes("Instagram")}><img src="https://imgs.search.brave.com/G6BtrupA5bS-bTEYo7OOpqZBfMwksZgxuRTf-c9w5QE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLXByZW1p/dW0vaWNvbm8tbG9n/b3RpcG8taW5zdGFn/cmFtXzYyODQwNy0x/OTI0LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA" alt="Logo-Instagram"/></a></div>
                    <div class="col"><a href="#" onClick={() => hundleredes("X")}><img src="https://imgs.search.brave.com/oCx0O2LNQqHmuz9u-bod4Dy--82w-Z7Ja7tWOVDdspg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLWdyYXRp/cy9udWV2by1pY29u/by10d2l0dGVyLWxv/Z28teC1zb2JyZS1m/b25kby1uZWdyb18x/MDE3LTQ1NDI3Lmpw/Zz9zZW10PWFpc19p/bmNvbWluZyZ3PTc0/MCZxPTgw" alt="Logo-X"/></a></div>
                    <div class="col"><a href="#" onClick={() => hundleredes("Youtube")}><img src="https://imgs.search.brave.com/AViV90FHMDf1UOo4VLOxiiFX0uaIYUfYAmPVeFj8hdE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90ZXh0/by1kZS15b3V0dWJl/LWNvbi12ZWN0b3It/ZGVsLWljb25vLWxv/Z290aXBvLTEzMzc0/MjA5Ny5qcGc" alt="Logo-Youtube"/></a></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
</footer>
  )
}
