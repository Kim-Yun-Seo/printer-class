{
    //프린터기 자체에서 필요한 기능들. 인스턵스 후에 있는 것들.
  // 종이 넣고빼기 -----
  // 잉크 넣고 빼기 -----
  // 종이, 잉크 없으면 작동 안됨 -----
  // 종이를 스캔. -----
  // 스캐너가 있어야함. -----
  // 스캔 메소드 -----

  interface Printer {
    scan(content: string): void;
    receiveComputerFile(computerFile: string): void;
    fillInk(addInkNum: number): void;
    fillPaper(addPaperNum: number): void;
  }

  class Printer implements Printer {
    private nowPaper:number = 0; //현재 종이량
    private nowInk: number = 0; //현재 잉크량
    private Ink_Capacity_Per_Print = 1; //프린트 한번 당 드는 잉크양
    private Paper_Capacity_Per_Print = 1; //프린트 한번 당 드는 종이량
    private paperMaxCapacity: number = 100; // 잉크 최대 용량
    private InkMaxCapacity: number = 100; // 종이 최대 용량
    private scanFile: string = ''; //스캔된 파일 내용
    private computerFile: string = ''; //컴퓨터로 다운받은 파일 내용

    pushStartButton() {
      console.log('printer is ON');
    } // 프린터 전원을 키는중.

    scan(content: string) {
      console.log('Now Scanning...');
      this.scanFile = content;
      // this.print(this.scanFile);
      console.log('Scanning is done');
    } //인자로 받은 내용을 스캔해서 스캔파일에 저장해놓음.


    receiveComputerFile(computerFile: string) {
      console.log('Receiving Files...')
      this.computerFile = computerFile;
      console.log('Receving is done');
    } //컴퓨터로 파일을 다운받음

    print(fileFormat: string) {
      if (this.nowInk === 0) {
        throw new Error ('there is no Ink!!!, plz fill ink');
      } else if (this.nowPaper === 0) {
        throw new Error ('there is no Paper!!!, plz fill Paper');
      }
      //잉크나 종이가 부족하면 출력이 안되는 오류가 남.
      //충분하면 프린트 시작
      console.log('Now Printing...');
      console.log(fileFormat);

      // if (fileFormat === 'scan') {
      //   console.log(this.scan_file);
      // } else if (fileFormat === 'computerData') {
      //   console.log(this.computerFile);
      // } else {
      //   throw new Error ('Wrong File Format');
      // }// print의 인자로 scan 파일인지 computerData인지를 받아서 어떤  파일을 출력할지.

      this.nowInk -= this.Ink_Capacity_Per_Print;
      this.nowPaper -= this.Paper_Capacity_Per_Print;
      //프린트를 했으니 사용한 만큼 빼기
    }

    
    get scan_file(): string {
      return this.scanFile;
    }

    get computer_file(): string {
      return this.computerFile;
    }

    get inkNumber(): number {
      return this.nowInk;
    }

    get paperNumber(): number {
      return this.nowPaper;
    }

    fillInk(addInkNum: number) {
      if (this.InkMaxCapacity < this.nowInk + addInkNum) {
        throw new Error ('too much ink!!!');
      }
      this.nowInk += addInkNum;
    }

    fillPaper(addPaperNum: number) {
      if (this.paperMaxCapacity < this.nowPaper + addPaperNum) {
        throw new Error ('too much paper!!!');
      }
      this.nowPaper += addPaperNum;
    }
  }

  const printer = new Printer();

  printer.pushStartButton();

  printer.fillInk(10);
  printer.fillPaper(10);

  printer.scan('this is scan file.');
  console.log('scanfile =====' ,printer.scan_file);

  printer.receiveComputerFile('this is computer file.');
  console.log('computerfile =====', printer.computer_file);

  console.log('-------------');
  printer.print(printer.computer_file); 
  console.log('-------------');
  printer.print(printer.scan_file);
  //이건 뭐람

  console.log(printer.paperNumber);
  console.log(printer.inkNumber);
  console.log(printer);
  
  // printer.fillInk(10);
  // printer.fillPaper(10);
  // printer.pushStartButton();
  // printer.scan('hello my name is ');
  // // printer.print('scan');
  // console.log(printer.inkNumber);
  // console.log(printer.paperNumber);
  // // console.log('aaaaaaa', printer)
  // printer.scan('bye bye ');
  // // printer.print();
  // console.log(printer.inkNumber);
  // console.log(printer.paperNumber);
}