import Bishop from '../../../public/W_Bishop.png';
import King from '../../../public/W_King.png';
import Knight from '../../../public/W_Knight.png';
import Pawn from '../../../public/W_Pawn.png';
import Queen from '../../../public/W_Queen.png';
import Rook from '../../../public/W_Rook.png';
import tou from '../../../public/Team/1.jpg';
import a2 from '../../../public/Team/2.jpg';
import a3 from '../../../public/Team/3.jpg';
import a4 from '../../../public/Team/4.jpg';
import a5 from '../../../public/Team/5.jpg';
import a6 from '../../../public/Team/6.png';
import a7 from '../../../public/Team/7.jpg';
import a8 from '../../../public/Team/8.jpg';
import a9 from '../../../public/Team/9.jpg';
import a10 from '../../../public/Team/10.jpg';
import a12 from '../../../public/Team/12.jpg';
import a13 from '../../../public/Team/13_2.jpg';
import nadhir from '../../../public/Team/14.jpg';
import a15 from '../../../public/Team/15.jpg';
import a17 from '../../../public/Team/17.jpg';
import a43 from '../../../public/Team/43.jpg';
import AnisNedjah from '../../../public/Team/AnisNedjah.jpg';
import AouatiZakaria from '../../../public/Team/AouatiZakaria.jpg';
import BelkisHanchi from '../../../public/Team/BelkisHanchi.jpg';
import IhsaneKerroum from '../../../public/Team/IhsaneKerroum.jpg';
import InesBenlatreche from '../../../public/Team/InesBenlatreche.jpg';
import KhaledOussamaabdelwadjed from '../../../public/Team/KhaledOussamaabdelwadjed.jpg';
import MedAmineTouati from '../../../public/Team/MedAmineTouati.jpg';
import user from '../../../public/Team/user.png';
import MohamedAli from '../../../public/Team/MohamedAli.jpg';
import RayanAg from '../../../public/Team/RayanAg.jpg';
import Saraaidi from '../../../public/Team/Saraaidi.jpg';
import YacineBoukaaba from '../../../public/Team/YacineBoukaaba.jpg';
import YounesIslamKaouani from '../../../public/Team/Younes IslamKaouani.jpg';
import yousramimouni from '../../../public/Team/yousramimouni.jpg';
import a45 from '../../../public/Team/45.jpg';


const P = "President";
const TM = "Team member";
const TL = 'Team leader';
export const data = [
    {
        name: 'Toufik Menaa',
        image: tou,
        icon: King,
        role: P,
        team: [
            {
                name: 'younes boudjada',
                image: a2,
                icon: Rook,
                role: 'Media ' + TL,
                team: [
                    {
                        name: 'Lekhal rahma chemselassil',
                        image: a7,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Cherouana Amina',
                        image: a8,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Bousbia yazid ',
                        image: a9,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Mellal Ahmed ',
                        image: user,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Chidekh Malak ',
                        image: a10,
                        icon: Pawn,
                        role: TM,
                    },
                ]
            },
            {
                name: 'Mahboub brahim ',
                image: a4,
                icon: Knight,
                role: 'Design ' + TL,
                team: [
                    {
                        name: 'Ihsane Kerroum',
                        image: IhsaneKerroum,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Mohamed ali Inouri',
                        image: MohamedAli,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Touati Mohamed Amine ',
                        image: MedAmineTouati,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Kaled Oussama abd el wadjed',
                        image: KhaledOussamaabdelwadjed,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Younes Islam kaouani ',
                        image: YounesIslamKaouani,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Mouad Rouabah',
                        image: user,
                        icon: Pawn,
                        role: TM,
                    },
                ]
            },
            {
                name: 'Mallem Bourhane Eddine islam',
                image: user,
                icon: Bishop,
                role: 'F&L ' + TL,
                team: [
                    {
                        name: 'Bareche Radouane ',
                        image: a43,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Anisse Nedjah',
                        image: AnisNedjah,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Mimouni Yousra',
                        image: yousramimouni,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Hanchi Takoua belkis',
                        image: BelkisHanchi,
                        icon: Pawn,
                        role: TM,
                    },
                ]
            },
            {
                name: 'DAHIAS Ali Zineddine',
                image: a3,
                icon: Queen,
                role: 'Tech ' + TL,
                team: [
                    {
                        name: 'Raid Teyar',
                        image: a12,
                        icon: Knight,
                        role: TM,
                    },
                    {
                        name: 'Kerouaz Mohamed louey',
                        image: a13,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Nadhir Djabali',
                        image: nadhir,
                        icon: Knight,
                        role: TM,
                    },
                    {
                        name: 'Boucenina Seif el islem',
                        image: a15,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Redouane Zeghba',
                        image: user,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Hadjaz Mohamed Islam',
                        image: a17,
                        icon: Pawn,
                        role: TM,
                    },
                ]
            },
            {
                name: 'Kassa Yasmine ',
                image: a5,
                icon: Knight,
                role: 'IR ' + TL,
                team: [
                    {
                        name: 'Soudani Fadoua',
                        image: user,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Aidi Sara',
                        image: Saraaidi,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Agabi Rayan',
                        image: RayanAg,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Ines Benlatreche',
                        image: InesBenlatreche,
                        icon: Pawn,
                        role: TM,
                    }
                ]
            },
            {
                name: 'Bakhouche akram',
                image: a6,
                icon: Rook,
                role: 'ER ' + TL,
                team: [
                    {
                        name: 'Yacine boukaba ',
                        image: YacineBoukaaba,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Aouati Nacef zakaria',
                        image: AouatiZakaria,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Mohamed Khalouche',
                        image: user,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Houssem eddine Magra',
                        image: user,
                        icon: Pawn,
                        role: TM,
                    },
                    {
                        name: 'Islam Kadri',
                        image: a45,
                        icon: Pawn,
                        role: TM,
                    },
                ]
            }
        ]
    }
];