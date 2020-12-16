     //variaveis do menu
     var tela= 1;
     var largura= 120;
     var altura= 50;
     var xMenu= 290;
     var yMenu1= 180;
     var yMenu2=235;
     var yMenu3=290;
     var yMenu4=365;
     var img;
     var img2;
     //variaveis do jogo em ação
     //Respostas
     var largura2= 180;
     var altura2= 120;
     var xJogo= 110;
     var xJogo2 = 430;
     var yJogo1= 210;
     var yJogo2= 210;
     var nivel= 1;
     var vidas= 3;
     //Pergunta
     var xPerg1= 255;
     var yPerg1= 130;
     var largura3= 200;
     var altura3= 50;
     //variaveis do tempo
     var cont= 0;
     var contS= 0;
     var rate= 30;

   function preload() {
     img = loadImage('Projeto_jogo-background.jpg.png');
     img2 = loadImage("imagem embaçada da quadra.png");
     fonteB = loadFont("Basketball.otf");
   }

   function setup() {
     createCanvas(700, 450);
     frameRate(rate);
   }

   function sleep(milliseconds) {
     const date = Date.now();
     let currentDate = null;
     do {
       currentDate = Date.now();
     } while (currentDate - date < milliseconds);
   }

   function draw() {

     //Tela de menu
     if (tela == 1){
       background(220);
       image(img, 0, 0)
       //Menu com três opções
       //Titulo
       textFont(fonteB)
       textSize(60);
       fill(255,150,0);
       noStroke();
       text("Rei dos", 350, 70);
       text("arremessos", 350, 120);


     //Jogar
     textAlign(CENTER);
     textSize(26);
     if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){

       stroke(200);
       fill(255,150,0);
       rect(xMenu, yMenu1, largura, altura, 15);
      if (mouseIsPressed){
         tela = 2;
     }

     }
       fill(240);
       noStroke();
       text("Jogar", 350, 215);

     //Tutorial
     if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
       stroke(200);
       fill(255,150,0);
       rect(xMenu, yMenu2, largura, altura, 15);
       if (mouseIsPressed){
         tela = 3;
       }
     }

     fill(240);
     noStroke();
     text("Tutorial", 350, 270);

     //Créditos
     if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
       stroke(200);
       fill(255,150,0);
       rect(xMenu, yMenu3, largura, altura, 15);
       if (mouseIsPressed){
         tela = 4;
       }
     }

     fill(240);
     noStroke();
     text("Creditos", 350, 325);

     }

     //tutorial
     if(tela == 3){
       background(220);
       image(img2, 0, 0)
       //Regras do jogo
       textFont("Georgia")
       textAlign(CENTER)
       textSize(20);
       fill(245);
       noStroke();
       text("Público alvo: ensino fundamental, 4º ano. ", 50, 35, 600, 300 );
       text("O jogador tem 30 segundos, em cada nível, para resolver cálculos simples, usando a adição e a subtração. Em cada nível estará na tela um cáculo para o jogador responder e duas respostas, uma certa e a outra errada.", 50, 80, 600, 300);
       text("Para jogar, o jogador precisa apenas do mouse.", 50, 200, 600, 300);
       //Botão de voltar
       if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
           stroke(200);
           fill(255,150,0);
           rect(xMenu, yMenu4, largura, altura, 15);
           if (mouseIsPressed){
           tela = 1;
           }
       }
       fill(240);
       noStroke();
       text("Voltar", 350, 400 );
     }

     //Créditos
     if(tela == 4){
         background(220);
         image(img2, 0, 0)
         //Informações do creditos
         textFont("Georgia")
         textAlign(CENTER)
         textSize(20);
         fill(245);
         noStroke();
         text("(EF04MA03) Resolver e elaborar problemas com números naturais envolvendo adição e subtração, utilizando estratégias diversas, como cálculo, cálculo mental e algoritmos, além de fazer estimativas do resultado. ", 50, 35, 600, 300 );
         text("Desenvolvido por João Victor Gomes Silveira - Lop/ECT",  50, 250, 600, 400)
         //Botão de voltar
           if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
           stroke(200);
           fill(255,150,0);
            rect(xMenu, yMenu4, largura, altura, 15);
               if (mouseIsPressed){
               tela = 1;
               }
           }
         fill(240);
         noStroke();
         text("Voltar", 350, 400 );
     }
    
    //GameOver 
    if( tela == 11){
       background(220);
       image(img2, 0, 0)
       
       //Informações do creditos
       textFont(fonteB)
       textSize(60);
       fill(255,150,0);
       noStroke();
       text("VOCE PERDEU! ", 50, 35, 600, 300 );
       
       //texto motivacional 
       textFont("Georgia")
       textAlign(CENTER)
       textSize(28);
       fill(255);
       noStroke();
       text("Não se preocupe, é sempre importante aprender com seus erros. Tente novamente! ", 50, 130, 600, 300 );
        
       //Botão de voltar
       if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
          stroke(200);
          fill(255,150,0);
          rect(xMenu, yMenu4, largura, altura, 15);
          if (mouseIsPressed){
              tela = 1;
              nivel = 1;
              vidas = 3;
          }
}
         textSize(20);
         fill(240);
         noStroke();
         text("Voltar", 350, 400 );
     }
     
    //Win
    if(tela == 12) {
       background(220);
       image(img2, 0, 0)
       
       //Informações do creditos
       textFont(fonteB)
       textSize(60);
       fill(255,150,0);
       noStroke();
       text("VOCE VENCEU! ", 50, 35, 600, 300 );
       
       //texto motivacional 
       textFont("Georgia")
       textAlign(CENTER)
       textSize(28);
       fill(255);
       noStroke();
       text("Parabéns, você é o melhor arremessador de todos! ", 50, 130, 600, 300 );
       
      //Botão de voltar
      if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
          stroke(200);
          fill(255,150,0);
          rect(xMenu, yMenu4, largura, altura, 15);
          if (mouseIsPressed){
              tela = 1;
              nivel = 1;
              vidas = 3;    
          }
}
         textSize(20);
         fill(240);
         noStroke();
         text("Voltar", 350, 400 );
    }

    //Jogo em ação
    //Nível 1
    if(tela == 2){

      background(220);
      image(img, 10, 0);

      //Informação do nível
      textSize(26);
      fill(255,150,0);
      noStroke();
      text("Nivel: " + nivel, 150, 70);

      //vidas
      text("Vidas: "+ vidas, 560, 70);

      //tempo
      cont= cont + 1;
      textSize(26);
      contS= parseInt( cont/rate);
      text(contS, 350, 70);

      if(contS>30){
      vidas= vidas - 1;
      nivel= nivel + 1;
      cont= 0;
      }

      //Respostas
      textAlign(CENTER);
      textSize(48);

      if (mouseX > xJogo && mouseX < xJogo + largura2 && mouseY > yJogo1 && mouseY < yJogo1 + altura2){
          stroke(200);
          fill(255,150,0);
          rect(xJogo, yJogo1, largura2, altura2, 15);
          if (mouseIsPressed){
              tela = 5;
              nivel= nivel + 1;
              cont= 0;
              sleep(200);
          }
      }

      fill(255);
      noStroke();
      text("200", 200, 290);

      textAlign(CENTER);
      textSize(48);
      if (mouseX > xJogo2 && mouseX < xJogo2 + largura2 && mouseY > yJogo2 && mouseY < yJogo2 + altura2){

          stroke(200);
          fill(255,150,0);
          rect(xJogo2, yJogo2, largura2, altura2, 15);
          if (mouseIsPressed){
              tela = 5;
              vidas = vidas - 1;
              nivel = nivel + 1;
              cont= 0;
              sleep(200);
          }
      }
      fill(255);
      noStroke();
      text("114", 520, 290);


      //Pergunta
      fill(255, 150, 0);
      rect(xPerg1, yPerg1, largura3, altura3, 15);

      textSize(32);
      fill(255);
      noStroke();
      text("157 + 43 = " , 350, 165);

    }

    //Nível 2
    else if(tela == 5){

           background(220);
           image(img, 10, 0);

           //Informação do nível
           textSize(26);
           fill(255,150,0);
           noStroke();
           text("Nivel: " + nivel, 150, 70);

           //vidas
           text("Vidas: "+ vidas, 560, 70);

           //tempo
           cont= cont + 1;
           textSize(26);
           contS= parseInt( cont/rate);
           text(contS, 350, 70);

           if(contS>30){
           vidas= vidas - 1;
           cont= 0;
           }

           //Respostas
           textAlign(CENTER);
           textSize(48);

           if (mouseX > xJogo && mouseX < xJogo + largura2 && mouseY > yJogo1 && mouseY < yJogo1 + altura2){
               stroke(200);
               fill(255,150,0);
               rect(xJogo, yJogo1, largura2, altura2, 15);
               if (mouseIsPressed){
                   tela = 6;
                   nivel = nivel + 1;
                   cont= 0;
                   sleep(200);
               }
           }

           fill(255);
           noStroke();
           text("37", 200, 290);

           textAlign(CENTER);
           textSize(48);

           if (mouseX > xJogo2 && mouseX < xJogo2 + largura2 && mouseY > yJogo2 && mouseY < yJogo2 + altura2){

               stroke(200);
               fill(255,150,0);
               rect(xJogo2, yJogo2, largura2, altura2, 15);
               if (mouseIsPressed){
                   tela = 6;
                   vidas= vidas - 1;
                   nivel= nivel + 1;
                   cont= 0;
                   sleep(200);
               }
           }
           fill(255);
           noStroke();
           text("36", 520, 290);


       //Pergunta (nível 2)
       fill(255, 150, 0);
       rect(xPerg1, yPerg1, largura3, altura3, 15);

       textSize(32);
       fill(255);
       noStroke();
       text("70 - 33 = " , 350, 165);

     }

    //Nível 3
    else if(tela == 6){
       background(220);
       image(img, 10, 0);

       //Informação do jogo
       textSize(26);
       fill(255,150,0);
       noStroke();
       text("Nivel: " + nivel, 150, 70);

       //vidas
       text("Vidas: "+ vidas, 560, 70);

       //tempo
       cont= cont + 1;
       textSize(26);
       contS= parseInt( cont/rate);
       text(contS, 350, 70);

       if(contS>30){
       vidas= vidas - 1;
       cont= 0;
       }

       //Jogar
       textAlign(CENTER);
       textSize(48);

       if (mouseX > xJogo && mouseX < xJogo + largura2 && mouseY > yJogo1 && mouseY < yJogo1 + altura2){
           stroke(200);
           fill(255,150,0);
           rect(xJogo, yJogo1, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 7;
               nivel= nivel + 1;
               cont= 0;
               sleep(200);
           }
       }

       fill(255);
       noStroke();
       text("88", 200, 290);

       textAlign(CENTER);
       textSize(48);
       if (mouseX > xJogo2 && mouseX < xJogo2 + largura2 && mouseY > yJogo2 && mouseY < yJogo2 + altura2){

           stroke(200);
           fill(255,150,0);
           rect(xJogo2, yJogo2, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 7;
               vidas= vidas - 1;
               nivel= nivel + 1;
               cont= 0;
               sleep(200);
               if(vidas < 1){
               tela = 11;
               nivel = 1;
               vidas = 3;
             }
           }
       }
       fill(255);
       noStroke();
       text("78", 520, 290);


       //Pergunta
       fill(255, 150, 0);
       rect(xPerg1, yPerg1, largura3, altura3, 15);

       textSize(32);
       fill(255);
       noStroke();
       text("29 + 59 = " , 350, 165);

     }

    //Nível 4
    else if(tela == 7){
       background(220);
       image(img, 10, 0);

       //Informação do jogo
       textSize(26);
       fill(255,150,0);
       noStroke();
       text("Nivel: " + nivel, 150, 70);

       //vidas
       text("Vidas: "+ vidas, 560, 70);

       //tempo
       cont= cont + 1;
       textSize(26);
       contS= parseInt( cont/rate);
       text(contS, 350, 70);

       if(contS>30){
       vidas= vidas - 1;
       cont= 0;
       }

       //Jogar
       textAlign(CENTER);
       textSize(48);

       if (mouseX > xJogo && mouseX < xJogo + largura2 && mouseY > yJogo1 && mouseY < yJogo1 + altura2){
           stroke(200);
           fill(255,150,0);
           rect(xJogo, yJogo1, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 8;
               nivel= nivel + 1;
               cont= 0;
               sleep(200);
            }
       }

       fill(255);
       noStroke();
       text("11", 200, 290);

       textAlign(CENTER);
       textSize(48);
       if (mouseX > xJogo2 && mouseX < xJogo2 + largura2 && mouseY > yJogo2 && mouseY < yJogo2 + altura2){

           stroke(200);
           fill(255,150,0);
           rect(xJogo2, yJogo2, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 8;
               vidas= vidas - 1;
               nivel= nivel + 1;
               cont= 0;
               sleep(200);
             if(vidas <= 0){
               tela = 11;
               nivel = 1;
               vidas = 3;
             }
           } 
       
       }
       fill(255);
       noStroke();
       text("102", 520, 290);


       //Pergunta
       fill(255, 150, 0);
       rect(xPerg1, yPerg1, largura3, altura3, 15);

       textSize(32);
       fill(255);
       noStroke();
       text("57 - 46 = " , 350, 165);
       }

    //Nível 5
    else if(tela == 8){
       background(220);
       image(img, 10, 0);

       //Informação do jogo
       textSize(26);
       fill(255,150,0);
       noStroke();
       text("Nivel: " + nivel, 150, 70);

       //vidas
       text("Vidas: "+ vidas, 560, 70);

       //tempo
       cont= cont + 1;
       textSize(26);
       contS= parseInt( cont/rate);
       text(contS, 350, 70);

       if(contS>30){
       vidas= vidas - 1;
       cont= 0;
       }

       //Jogar
       textAlign(CENTER);
       textSize(48);

       if (mouseX > xJogo && mouseX < xJogo + largura2 && mouseY > yJogo1 && mouseY < yJogo1 + altura2){
           stroke(200);
           fill(255,150,0);
           rect(xJogo, yJogo1, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 9;
               nivel= nivel + 1;
               cont= 0;
               sleep(200);
           }
       }

       fill(255);
       noStroke();
       text("360", 200, 290);

       textAlign(CENTER);
       textSize(48);
       if (mouseX > xJogo2 && mouseX < xJogo2 + largura2 && mouseY > yJogo2 && mouseY < yJogo2 + altura2){

           stroke(200);
           fill(255,150,0);
           rect(xJogo2, yJogo2, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 9;
               vidas= vidas - 1;
               nivel= nivel + 1;
               cont= 0;
               sleep(200);
               if(vidas <= 0){
               tela = 11;
               nivel = 1;
               vidas = 3;
             }
           }
       }
       fill(255);
       noStroke();
       text("358", 520, 290);


       //Pergunta
       fill(255, 150, 0);
       rect(xPerg1, yPerg1, largura3, altura3, 15);

       textSize(32);
       fill(255);
       noStroke();
       text("388 - 28 = " , 350, 165);
       }

    //Nível 6
    else if(tela == 9){
       background(220);
       image(img, 10, 0);

       //Informação do jogo
       textSize(26);
       fill(255,150,0);
       noStroke();
       text("Nivel: " + nivel, 150, 70);

       //vidas
       text("Vidas: "+ vidas, 560, 70);

       //tempo
       cont = cont + 1;
       textSize(26);
       contS = parseInt( cont/rate);
       text(contS, 350, 70);

       if(contS>30){
           vidas = vidas - 1;
           cont = 0;
       }

       //Jogar
       textAlign(CENTER);
       textSize(48);

       if (mouseX > xJogo && mouseX < xJogo + largura2 && mouseY > yJogo1 && mouseY < yJogo1 + altura2){
           stroke(200);
           fill(255,150,0);
           rect(xJogo, yJogo1, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 10;
               nivel = nivel + 1;
               cont= 0;
               sleep(200);
           }
       }

       fill(255);
       noStroke();
       text("19", 200, 290);

       textAlign(CENTER);
       textSize(48);
       if (mouseX > xJogo2 && mouseX < xJogo2 + largura2 && mouseY > yJogo2 && mouseY < yJogo2 + altura2){

           stroke(200);
           fill(255,150,0);
           rect(xJogo2, yJogo2, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 10;
               vidas= vidas - 1;
               nivel= nivel + 1;
               cont= 0;
               sleep(200);
               if(vidas <= 0){
               tela = 11;
               nivel = 1;
               vidas = 3;
             }
           }
       }
       fill(255);
       noStroke();
       text("16", 520, 290);


       //Pergunta
       fill(255, 150, 0);
       rect(xPerg1, yPerg1, largura3, altura3, 15);

       textSize(32);
       fill(255);
       noStroke();
       text("9 + 3 + 7 = " , 350, 165);
       }

    //Nível 7
    else if(tela == 10){
       background(220);
       image(img, 10, 0);

       //Informação do jogo
       textSize(26);
       fill(255,150,0);
       noStroke();
       text("Nivel: " + nivel, 150, 70);

       //vidas
       text("Vidas: "+ vidas, 560, 70);

       //tempo
       cont= cont + 1;
       textSize(26);
       contS= parseInt( cont/rate);
       text(contS, 350, 70);

       if(contS>30){
       vidas= vidas - 1;
       cont= 0;
       }

       //Jogar
       textAlign(CENTER);
       textSize(48);

       if (mouseX > xJogo && mouseX < xJogo + largura2 && mouseY > yJogo1 && mouseY < yJogo1 + altura2){
           stroke(200);
           fill(255,150,0);
           rect(xJogo, yJogo1, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 12;
               cont = 0;
               sleep(200);
           }
       }

       fill(255);
       noStroke();
       text("14", 200, 290);

       textAlign(CENTER);
       textSize(48);
       if (mouseX > xJogo2 && mouseX < xJogo2 + largura2 && mouseY > yJogo2 && mouseY < yJogo2 + altura2){

           stroke(200);
           fill(255,150,0);
           rect(xJogo2, yJogo2, largura2, altura2, 15);
           if (mouseIsPressed){
               tela = 12;
               vidas= vidas - 1;
               cont= 0;
               sleep(200);
               if(vidas <= 0){
               tela = 11;
               nivel = 1;
               vidas = 3;
             }
           }
       }
       fill(255);
       noStroke();
       text("18", 520, 290);


       //Pergunta
       fill(255, 150, 0);
       rect(xPerg1, yPerg1, largura3, altura3, 15);

       textSize(32);
       fill(255);
       noStroke();
       text("9 + 7 - 2 = " , 350, 165);
       }
}
