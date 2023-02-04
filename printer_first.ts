// {
//     //프린터
//   // 종이 넣고빼기 -----
//   // 잉크 넣고 빼기 -----
//   // 종이, 잉크 없으면 작동 안됨 -----
//   // 스캔만 되는 싸구려 컴터 -----
//   // 종이를 스캔. -----
//   // 스캐너가 있어야함. -----
//   // 스캔 메소드 -----

//   class CheapPrinter {
//     static nowPaper:number = 0;
//     static nowInk: number = 0;
//     static Ink_Capacity_Per_Print = 1;
//     static Paper_Capacity_Per_Print = 1;
//     static paperMaxCapacity: number = 100;
//     static InkMaxCapacity: number = 100;
//     // private redInk: number = 0;
//     // private blueInk: number = 0;
//     //일단은 검정색만 쓰도록 만들고 나중에 수정.
//     printcontent: string = '';
    

//     constructor (content: string, useColor: string) {
//       CheapPrinter.scan(content, useColor)
//       this.printcontent = content;
//       //이걸 스캐너에서 해야하는데... 어케 하지
//       //프린트할 내용에 받은 내용을 대입함.
//     }

//     static scan(content: string, useColor: string) {
//       if (CheapPrinter.nowInk === 0) {
//         throw new Error ('there is no Ink!!!, plz fill ink')
//       } else if (CheapPrinter.nowPaper === 0) {
//         throw new Error ('there is no Paper!!!, plz fill paper')
//       }
//       console.log('Now Scanning....')
      
//       CheapPrinter.nowInk -= CheapPrinter.Ink_Capacity_Per_Print
//       CheapPrinter.nowPaper -= CheapPrinter.Paper_Capacity_Per_Print
//     }

//     // scan2 (content:string) {

//     // }

//     get ink(): number {
//       return CheapPrinter.nowInk;
//       //남은 잉크의 양을 알려줌.
//     }

//     get paper(): number {
//       return CheapPrinter.nowPaper;
//     }

//     static fillInk(addInkNumber: number) {
//       // console.log('aaaaaa')
//       this.nowInk += addInkNumber
//     }

//     static fillPaper(addnowPaper: number) {
//       this.nowPaper += addnowPaper
//     }
//   }

//   function fillInk (capacity: number) {
//     if (CheapPrinter.InkMaxCapacity < CheapPrinter.nowInk + capacity) {
//       throw new Error ('too much ink!!!')
//     }
//     CheapPrinter.fillInk(capacity);
//   }

//   function fillPaper (number: number) {
//     if (CheapPrinter.paperMaxCapacity < CheapPrinter.nowPaper + number) {
//       throw new Error ('too much paper!!!')
//     }
//     CheapPrinter.fillPaper(number);
//   }

//   fillInk(10);
//   // fillInk(1);
//   // fillPaper(101);
//   fillPaper(10);
//   const selfIntroduction = new CheapPrinter('my name is KimYunseo', 'black');
//   console.log('printing content ==== ',selfIntroduction.printcontent)

//   console.log('nowPaper ==== ',CheapPrinter.nowPaper);
//   console.log('nowInk ==== ',CheapPrinter.nowInk);
//   const Certificate_of_enrollment = new CheapPrinter('you are sungshin student!!!', 'black');
//   console.log('nowPaper ==== ',CheapPrinter.nowPaper);
//   console.log('nowInk ==== ',CheapPrinter.nowInk);

// }