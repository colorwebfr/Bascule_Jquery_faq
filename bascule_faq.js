
//FAQ Bascule
$(document).ready(function () 
{
	$('.contentBascule').slideUp();

	$('.BlockBascule').on("click", function () 
	{ 
		$(this).find('.contentBascule').toggleClass('BasculeOpen');
		if( !$(this).find('.contentBascule').hasClass('BasculeOpen') )
		{
			$(this).find('span.stateBascule').text('+');
			$(this).find('.contentBascule').slideUp();
		}
		else
		{
			$(this).find('span.stateBascule').text('-');
			$(this).find('.contentBascule').slideDown();
		}
	});
	
});

/*//////// Envirronnement d'utilisation ///////////////////*/

/* <div class="blockBasculeFAQ">
        <div class="container">
            <div class="BlockBascule">
                <div class="titleBascule">
                    <h2>Comment choisir le bon modèle de pelouse artificielle ?</h2> <span class="stateBascule">+</span>
                </div>
                <div class="contentBascule">
                    <p>
                        Le rendu final dépendra du choix du gazon synthétique. La « vraie belle pelouse » artificielle s’obtient par la longueur du brin (fibre, ou faux brin d’herbe) et les différentes tonalités qui la composent. Mais ce n’est pas tout. Un mélange de fibres droites et frisées fera toute la différence !<br>Plus la hauteur de brin sera conséquente, plus la fausse pelouse offrira de réalisme. Plus les verts seront nuancés, plus le rendu sera naturel.<br>Pour un habillage de surface sur mesure, nous adaptons les dimensions de nos rouleaux à la longueur et la largeur désirées. Qu’il s’agisse de terrain de sport, jardin, terrasse, patio ou balcon, chaque futur espace vert a sa solution.
                    </p>
                </div>
            </div>
            <div class="BlockBascule">
                <div class="titleBascule">
                    <h2>Comment poser le faux gazon ?</h2> <span class="stateBascule">+</span>
                </div>
                <div class="contentBascule">
                    <p>
                        La pelouse artificielle est délivrée sous la forme d’un rouleau.<br>Que la pose de gazon synthétique soit prévue sur dalle béton ou sur de la terre, nous répondons aux exigences du sol à recouvrir. Vous avez le loisir de réaliser la pose vous-même ou de la confier aux experts France Haie. Pour cela, vous pouvez bénéficier de nos services de livraison ou en retrait dans nos showrooms.
                    </p>
                </div>
            </div>
            <div class="BlockBascule">
                <div class="titleBascule">
                    <h2>Quel est le prix d'une pelouse synthétique ?</h2> <span class="stateBascule">+</span>
                </div>
                <div class="contentBascule">
                    <p>
                        Les produits d’un bon rapport qualité/prix présentent une certaine hauteur de brins d’herbe ainsi qu’une densité de touffes au m² élevée. Plus ces valeurs sont supérieures, plus le produit monte en gamme.<br>Pour vous offrir le meilleur rapport qualité / prix, nos pelouses disposent de hauteurs entre 32 cm et 62 cm.<br>Un brin trop court et l’effet moquette verte est inévitable. C’est pourquoi, nous avons fait le choix de nous focaliser sur une offre répondant aux plus exigeants.<br>Enfin, il est essentiel de considérer l’usage que vous ferez de votre belle pelouse. Pour garder une couleur dans les nuances les plus naturelles de vert, il est indispensable que la pelouse soit protégée contre les UV.
                    </p>
                </div>
            </div>
            <div class="BlockBascule">
                <div class="titleBascule">
                    <h2>Comment entretenir et nettoyer du gazon artificiel ?</h2> <span class="stateBascule">+</span>
                </div>
                <div class="contentBascule">
                    <p>
                        Le gazon artificiel ne se plie pas contraintes du gazon naturel. Ce type de pelouse ne craint ni les champignons, ni les mauvaises herbes, ni les maladies. Cependant, la simplicité déconcertante d’entretien de la pelouse synthétique ne vous privera pas du plaisir de « jardiner ».<br>En effet, la durée de vie du gazon synthétique évolue entre 15 et 25 ans selon son utilisation. En cas de climat sec, un rinçage de temps en temps permet de conserver sa beauté et son réalisme plus longtemps. Un brossage croisé à l’aide d’un râteau aux dents plastifiées ou synthétiques (et non métalliques) relève les fibres et aère l’ensemble.<br>Enfin, en cas de tâches laissées par la vie courante (animal, boisson ou nourriture), il vous suffit de nettoyer la zone incriminée avec de l’eau savonneuse au savon de Marseille. En agissant ainsi, les brins de l’herbe artificielle seront préservés.
                    </p>
                </div>
            </div>
            <div class="BlockBascule">
                <div class="titleBascule">
                    <h2>Les autres avantages de la fausse pelouse</h2> <span class="stateBascule">+</span>
                </div>
                <div class="contentBascule">
                    <p>
                        Pour une belle ligne, le sol est lissé au rouleau avant la pose. Cette technique empêche la formation de rainures ou creux propices à l’accumulation d’eau. Outre les avantages évidents relatifs à l’entretien, et à l’esthétique, le gazon synthétique facilite la vie. Vous pouvez laisser jouer vos enfants dans le jardin sans risque de retrouver leurs vêtements tâchés de traces verdâtres indélébiles.
                    </p>
                </div>
            </div>
        </div>
    </div> */

    /*//////// END Envirronnement d'utilisation ///////////////////*/