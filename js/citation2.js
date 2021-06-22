class Personnage 
{      
    constructor(phrases)
    {
        this.phrases = phrases;  
    }
    
    getRandom(max)
    {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    generate()
    {
        return this.phrases.block1[this.getRandom(this.phrases.block1.length)] + " " + this.phrases.block2[this.getRandom(this.phrases.block2.length)] + " " + this.phrases.block3[this.getRandom(this.phrases.block3.length)];
    }
       
    sentenceX()
    {
        var text = "";
                    
        for(let i = 0 ; i < document.querySelector('input[name=nb]:checked').value; i++)
        {                         
             text += this.generate() + "<br><br>" ;               
        }
        document.getElementById("contenu").innerHTML = text;
        
    }
}

const perceval = new Personnage( 
{
  "block1": 
  [
    "Sur une échelle de 2 à 76, et là je préfère prendre large, de 2 à 71,  ",
    "Une fois, à une exécution, je m'approche d'une fille. Pour rigoler je lui dis : ",
    "Afin d'affiner le mouvement, ",
    "Sire, Sire, "
  ],
  "block2": 
  [
    "j’aime bien pisser du haut des remparts,",
    "il faut rafraîchir les matignons",
    "il faut que je retourne à la ferme de mes vieux ! Y a ma grand-mère qui a glissé",
    "il vaut mieux l'attraper par la partie boulière, et se battre avec la tige "
  ],
  "block3": 
  [
    " de façon péremptoire.",
    " perchées sur le tabouret de mon grand-père.",
    " sur une bouse"
  ]
});

const leodagand = new Personnage(
{
    "block1": 
    [
    "Enfin moi, tout ce que j'en dis, c'est que ",
    "Non mais attendez, là, je crois qu'on s'est mal compris, ",
    "D'après mes derniers renseignements, "
    ],

    "block2": 
    [
    "j'pense pas que deux trous-du-cul soient plus efficaces qu’un seul, mais",
    "vous voulez que j'aille lui mettre une avoine ? Et ",
    "personnellement, j'me la taille en biseau, mais "
    ],
    
    "block3": 
    [
    "vous n'allez pas être embêté avec une maîtresse qu’a plus d’mains ? ",
    "je peux vous proposer mon pied dans les noix !",
    "j'vous jure hein, des tanches pareilles, on devrait les mettre sous verre !"
    ]    
});


function play(idPlayer, control) 
{
    var player = document.querySelector('#' + idPlayer);
    player.volume = 0.1;
	
    if (player.paused) 
    {
        player.play();
    } 
}

if ('addEventListener' in window)
{
    window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-preload\b/, ''); });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}







