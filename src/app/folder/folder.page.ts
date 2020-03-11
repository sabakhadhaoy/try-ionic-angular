import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"]
})
export class FolderPage implements OnInit {
  public folder: string;
  public convo = [
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Romel Silva",
      message: `Listen, I've had a pretty messed up days and a month a year for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Filbert Canares",
      message: `I've got enough on my plate as it is, and its for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Marvin Blanca",
      message: `Listen, I've had a pretty messed up days and a month a year for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Stephen Asimudin",
      message: `I've got enough on my plate as it is, and its for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Ian Laborte",
      message: `I've got enough on my plate as it is, and its for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Arjie Wenceslao",
      message: `Listen, I've had a pretty messed up days and a month a year for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Scent Luab",
      message: `Listen, I've had a pretty messed up days and a month a year for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Apol Bobohis",
      message: `Listen, I've had a pretty messed up days and a month a year for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Clester Aldemita",
      message: `I've got enough on my plate as it is, and its for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Jeffrey Dirty",
      message: `Listen, I've had a pretty messed up days and a month a year for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Jovarie Inoc",
      message: `I've got enough on my plate as it is, and its for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Mavic Cabiles",
      message: `I've got enough on my plate as it is, and its for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Smie Rico",
      message: `Listen, I've had a pretty messed up days and a month a year for the whole universe`
    },
    {
      imgSrc: "../../assets/images/Diamante.png",
      name: "Glorife Inoc",
      message: `I've got enough on my plate as it is, and its for the whole universe`
    }
  ];

  public filteredConvo = [];
  public searchInput: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
    this.filteredConvo = this.convo;
  }

  async handleButton(name, message) {
    const alert = await this.alertController.create({
      header: name,
      message: message,
      buttons: [
        {
          text: "OK",
          handler: () => {
            console.log("Okay pressed");
          }
        }
      ]
    });

    await alert.present();
  }

  handleSearch() {
    this.filteredConvo = this.convo.filter(search => {
      return search.name.toLowerCase().includes(this.searchInput.toLowerCase());
    });
  }
}
