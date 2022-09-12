//btn add e remover produto
let btnSubmit = document.querySelector(".btn-submit");
let ComprarMais = document.querySelector(".more");
let comprarMenos = document.querySelector(".minus");
let produtosNoCarrinho = document.querySelector("produtos-no-carrinho");

let ValorDoProduto = document.querySelector(".value");
let QtdCompras = document.getElementById("qdtDeCompras");

//carrinho superior direito de compra (verificar compras)
let ProfileCompras = document.getElementById("qdt-compras");
let ProfileTotalcompras = document.querySelector("#total-preço-compras");
let profileEmpty = document.getElementById("cart-is-empty");
let carrinhoCompras = document.getElementById("carro-perfil-compra");
let IdDeCompras = document.querySelector(".IdDeCompras");
let ProdutosNoCarrinho = document.querySelector(".produtos-no-carrinho");
let DeletarCompras = document.querySelector(".deletar-compras");
let produtosComprado = document.querySelector(".produtos-comprado");

//navegação ul li
let navbar = document.querySelector(".navbar");

//btn tollbar
let tollbar = document.querySelector(".toolbar");

//fechar menu sanduiche
let menuMobile = document.querySelector(".menu-mobile");
let closeSanduiche = document.querySelector(".close-sanduiche");

ProdutosNoCarrinho.style.display = "none";
profileEmpty.style.display = "block";
IdDeCompras.style.display = "none";

let AddQuantidade = 1;
let preco = 125;

function carrinhoDeCompras(event) {
  let produtosCart = document.querySelector(".produtos-Cart");
  if (produtosCart.classList.contains("produtos-Cart-active")) {
    produtosCart.classList.remove("produtos-Cart-active");
  } else {
    produtosCart.classList.add("produtos-Cart-active");
  }
}

function AdicionarQtdAoCarrinho() {
  let PrecoDoProdutoTotal = preco * AddQuantidade;
  let qtdMais = AddQuantidade++;

  IdDeCompras.innerHTML = qtdMais;
  QtdCompras.innerHTML = qtdMais;
  ValorDoProduto.innerHTML = "$" + PrecoDoProdutoTotal + ".00";
  ProfileTotalcompras.innerHTML = "$" + PrecoDoProdutoTotal + ".00";
  ProfileCompras.innerHTML = qtdMais++;
  console.log(qtdMais + " x " + preco + " = " + PrecoDoProdutoTotal);
}

function RemoverQtdAoCarrinho() {
  let qtdMais = AddQuantidade--;
  let PrecoDoProdutoTotal = preco * AddQuantidade;
  let PrecoDoProdutoMenos = PrecoDoProdutoTotal - preco;
  let qtdMenos = (qtdMais -= 1);

  QtdCompras.innerHTML = qtdMenos -= 1;
  ProfileCompras.innerHTML = qtdMenos--;
  IdDeCompras.innerHTML = qtdMais -= 1;

  if (PrecoDoProdutoMenos <= 0) {
    ValorDoProduto.innerHTML = "$00.00";
    ProfileCompras.innerHTML = "0";
    ProfileTotalcompras.innerHTML = "$00.00";
    QtdCompras.innerHTML = 0;
    AddQuantidade = 1;
    IdDeCompras.innerHTML = 0;
    IdDeCompras.style.display = "none";
  } else if (PrecoDoProdutoMenos > 0) {
    ValorDoProduto.innerHTML = "$" + PrecoDoProdutoMenos + ".00";
    ProfileTotalcompras.innerHTML = "$" + PrecoDoProdutoMenos + ".00";
  }

  console.log(qtdMenos + " - " + preco + " = " + PrecoDoProdutoMenos);
}

function menuSansuiche(event) {
  menuMobile.style.display = "flex";
}

function closeMenu() {
  menuMobile.style.display = "none";
}

function Deletarproduto() {
  let qtdMais = AddQuantidade--;
  let PrecoDoProdutoTotal = preco * AddQuantidade;
  let PrecoDoProdutoMenos = PrecoDoProdutoTotal - preco;
  let qtdMenos = qtdMais -= 1;

  ProfileTotalcompras.innerHTML = "$" + PrecoDoProdutoMenos + ".00";
  QtdCompras.innerHTML = qtdMenos -= 1;
  ProfileCompras.innerHTML = qtdMenos;
  IdDeCompras.innerHTML = qtdMais -= 1;
  QtdCompras.innerHTML = 0;

  if (PrecoDoProdutoMenos == 0) {
    IdDeCompras.style.display = "none";
    ProdutosNoCarrinho.style.display = "none";
    IdDeCompras.style.display = "none";
    profileEmpty.style.display = "block";
  }
}

function AddAoCarrinho() {
  IdDeCompras.style.display = "flex";
  ProdutosNoCarrinho.style.display = "block";
  profileEmpty.style.display = "none";
  ValorDoProduto.innerHTML = "$00.00";
  QtdCompras.innerHTML = 0;
}

closeSanduiche.addEventListener("click", closeMenu);
carrinhoCompras.addEventListener("click", carrinhoDeCompras);
ComprarMais.addEventListener("click", AdicionarQtdAoCarrinho);
comprarMenos.addEventListener("click", RemoverQtdAoCarrinho);
tollbar.addEventListener("click", menuSansuiche);
DeletarCompras.addEventListener("click", Deletarproduto);
btnSubmit.addEventListener("click", AddAoCarrinho);
