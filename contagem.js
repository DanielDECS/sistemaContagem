let numeroAlunos = 10;
for(let contador = 0; contador < numeroAlunos; contador++) {
    if(contador == 0) {
        console.log('O numero é ZERO')
    }
    else if(contador % 2 == 0){
        console.log('O numero ' + contador + ' é PAR')
    } 
    else if(contador % 2 == 1){
        console.log(`O numero  ${contador} é IMPAR`)
    }

    // switch (contador) {
    //     case 0:
    //         console.log('O numero é ZERO')
    //         break;
        
    //     case contador % 2 == 0:
    //         console.log('Par')
    //         break;
        
    //     case contador % 2 == 1:
    //         console.log('Impar')
    //         break;

    //     default:
    // //         break;
            
    // }
}
