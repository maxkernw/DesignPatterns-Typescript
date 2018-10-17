/*
Facade pattern provides a simplified interface to a complex subsystem.
*/
class Computer
{
  public GetElectricShock(): void
  {
    console.log("Ouch!");
  }

  public MakeSound(): void
  {
    console.log("Beep beep!");
  }

  public ShowLoadingScreen(): void
  {
    console.log("Loading..");
  }

  public Bam(): void
  {
    console.log("Ready to be used!");
  }

  public CloseEverything(): void
  {
    console.log("Bup bup bup buzzzz!");
  }

  public Sooth(): void
  {
    console.log("Zzzzz");
  }

  public PullCurrent(): void
  {
    console.log("Haaah!");
  }
}

class ComputerFacade
{
  private mComputer: Computer;

  public constructor(computer: Computer)
  {
    this.mComputer = computer;
  }

  public TurnOn(): void
  {
    this.mComputer.GetElectricShock();
    this.mComputer.MakeSound();
    this.mComputer.ShowLoadingScreen();
    this.mComputer.Bam();
  }

  public TurnOff(): void
  {
    this.mComputer.CloseEverything();
    this.mComputer.PullCurrent();
    this.mComputer.Sooth();
  }
}

const computer = new ComputerFacade(new Computer());
computer.TurnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
computer.TurnOff();  // Bup bup buzzz! Haah! Zzzzz
