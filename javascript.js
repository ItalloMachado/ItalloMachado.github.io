function MostraVideo(){
    document.getElementById("videoOpen").style.display="block";
}
function FechaVideo(){
    document.getElementById("videoOpen").style.display= "none";
} 
function Menu(){
        document.getElementById("sidenav").style.width = "100%";
    }
function closeNav(){
        document.getElementById("sidenav").style.width = "0";
}    
    $(document).ready(function(){
        window.onscroll = function() {
            if (document.documentElement.scrollTop<document.getElementById("Projetos").offsetTop){
                var atual=document.getElementsByClassName("ativo");
                if (atual.length>0){
                    atual[0].className=atual[0].className.replace("ativo","");
                }
            document.getElementById("SobreNav").className+="ativo";
            }else if(document.documentElement.scrollTop<document.getElementById("Skills").offsetTop){
            var atual=document.getElementsByClassName("ativo");
                if (atual.length>0){
                    atual[0].className=atual[0].className.replace("ativo","");
                }
            document.getElementById("ProjetosNav").className+="ativo";
            }else if(document.documentElement.scrollTop<document.getElementById("Educacao").offsetTop){
                var atual=document.getElementsByClassName("ativo");
                if (atual.length>0){
                    atual[0].className=atual[0].className.replace("ativo","");
                }
            document.getElementById("SkillsNav").className+="ativo";
            }else if(document.documentElement.scrollTop<document.getElementById("Contato").offsetTop){
                var atual=document.getElementsByClassName("ativo");
                if (atual.length>0){
                    atual[0].className=atual[0].className.replace("ativo","");
                }
            document.getElementById("EducacaoNav").className+="ativo";
            }else{
                var atual=document.getElementsByClassName("ativo");
                if (atual.length>0){
                    atual[0].className=atual[0].className.replace("ativo","");
                }
            document.getElementById("ContatoNav").className+="ativo";
            }
            if (window.innerWidth>=800){
                document.getElementById("closebtn").style.display="none";
                document.getElementById("navMobile").style.display="none";
                if (document.body.scrollTop >= window.innerHeight-60 || document.documentElement.scrollTop >= window.innerHeight-60) {
                    document.getElementById("sidenav").style.width = "250px";
                    document.getElementById("Principal").style.marginLeft = "250px";
                    document.getElementById("head").style.marginLeft = "250px";
                }else{
                    document.getElementById("sidenav").style.width = "0";
                    document.getElementById("Principal").style.marginLeft = "0";
                    document.getElementById("head").style.marginLeft = "0";
                }
            }else{
                document.getElementById("closebtn").style.display="block";
                document.getElementById("navMobile").style.display="block";
                document.getElementById("sidenav").style.width = "0";
                document.getElementById("Principal").style.marginLeft = "0";
                document.getElementById("head").style.marginLeft = "0";

                if (document.body.scrollTop >= (window.innerHeight-60) || document.documentElement.scrollTop >= window.innerHeight-60) {
                    document.getElementById("navMobile").style.top = "0";
                }else{
                    document.getElementById("navMobile").style.top = "-100px";
                }
            }
        };
        $('a').on('click',function(event){
            if(this.hash !==""){
                event.preventDefault();
                var hash=this.hash;
                if (window.innerWidth>=800){
                    var atual=document.getElementsByClassName("ativo");
                    if (atual.length>0){
                        atual[0].className=atual[0].className.replace("ativo","");
                    }
                    this.className+="ativo";
                    $('html,body').animate({scrollTop: $(hash).offset().top},800,function(){
                        window.location.hash=hash;}); 
                }else{
                    document.getElementById("sidenav").style.width = "0";
                    var x=$(hash).offset().top-60;
                    $('html,body').animate({scrollTop: x},800,function(){});
                 }
            }
        });
        $('.SideFoto').on('click',function(event){
            document.getElementById("sidenav").style.width = "0";
            event.preventDefault();
                var hash="#head";
                if (window.innerWidth<800){
                    document.getElementById("sidenav").style.width = "0";
                 }
                $('html,body').animate({scrollTop: $(hash).offset().top},800,function(){
                    window.location.hash=hash;}); 
        });
    });