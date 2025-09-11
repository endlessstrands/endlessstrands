header = `<header class="site-header">
    <div class="container">
        <div class="row">

            <div class="col-lg-8 col-12 d-flex flex-wrap">
                <p class="d-flex mb-0">
                    <i class="bi-envelope me-2"></i>

                    <a href="mailto:contact@endlessstrands.org">
                        contact@endlessstrands.org
                    </a>
                </p>
            </div>

            <div class="col-lg-3 col-12 ms-auto d-lg-block d-none">
                <ul class="social-icon">
                    <li class="social-icon-item">
                        <a href="https://www.instagram.com/endless.strands.canada" class="social-icon-link bi-instagram"
                            target="_blank">
                            <span class="visually-hidden">Visit Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</header>


<nav class="navbar navbar-expand-lg bg-light shadow-lg">
    <div class="container">
        <a class="navbar-brand" href="./">
            <img src="images/logo.avif" class="logo img-fluid" alt="Logo of Endless Strands.">
            <span>
                Endless Strands
                <small>Canada</small>
            </span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link click-scroll" href="./#top">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="./#section_2">About</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="./#section_3">Events</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="./#section_4">Volunteer</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="./#section_5">Contact</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="sponsors.html">Sponsors</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link click-scroll" href="salon_partners.html">Salon Partners</a>
                </li>

                <li class="nav-item ms-3">
                    <a class="nav-link custom-btn custom-border-btn btn" href="donate.html">Donate</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

footer = `<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-2 col-10 mb-4 mx-auto">
                <img src="images/logo_white.avif" class="logo img-fluid" alt="Logo of Endless Strands.">
            </div>

            <div class="col-lg-4 col-10 mb-4 mx-auto">
                <p class="text-white">Endless Strands operates on the traditional territory of many nations,
                    including the Mississaugas of the Credit, the Anishnaberg, the Chippewa, the Haudenosaunee, and
                    the Wendat peoples, and is
                    now home to many diverse First Nations, Inuit, and Métis peoples. We acknowledge that Toronto is
                    covered by Treaty 13 with the Mississaugas of the Credit.</p>
            </div>

            <div class="col-lg-4 col-10 mx-auto">
                <h5 class="text-white mb-3">Contact Information</h5>

                <p class="text-white d-flex">
                    <i class="bi-geo-alt me-2"></i>
                    Toronto, ON
                </p>

                <p class="text-white d-flex">
                    <i class="bi-envelope me-2"></i>

                    <a href="mailto:contact@endlessstrands.org" class="site-footer-link">
                        contact@endlessstrands.org
                    </a>
                </p>

                <p class="text-white d-flex mt-3">
                    <i class="bi-instagram me-2"></i>

                    <a href="https://www.instagram.com/endless.strands.canada" class="site-footer-link"
                        target="_blank">
                        @endless.strands.canada
                    </a>
                </p>
            </div>
        </div>
    </div>

    <div class="site-footer-bottom">
        <div class="container">
            <div class="row">

                <div class="col-lg-6 col-md-7 col-12">
                    <p class="copyright-text mb-0">Copyright © 2025 Endless Strands</p>
                    <p class="copyright-text mb-0">Endless Strands is a federally incorporated not-for-profit
                        organization.</p>
                </div>

            </div>
        </div>
    </div>
</footer>`;

document.body.innerHTML = header + document.body.innerHTML + footer;