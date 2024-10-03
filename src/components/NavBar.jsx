import CartWidget from "./CartWidget"
function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img
                    src="./src/assets/project-logo.svg"
                    alt="project/logo"
                    width="150"
                    height="auto" />
                <h1>Basket-Shop</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                        <a class="nav-link" href="#">ZAPATILLAS</a>
                        <a class="nav-link" href="#">REMERAS</a>
                        <a class="nav-link" aria-disabled="true">PELOTAS</a>
                    </div>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar