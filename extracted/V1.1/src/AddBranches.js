import React, { useState, useEffect } from "react";
import json from './data.json'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import './AddEvents.css'

const animatedComponents = makeAnimated();
const Countries = [
  {label:'Peterborough',value: 103},
  {label:'Gillingham',value: 105},
  {label:'Dorking',value: 107},
  {label:'St Ives',value: 108},
  {label:'Brighton',value: 114},
  {label:'Brent Cross',value: 119},
  {label:'Dorchester',value: 120},
  {label:'Esher',value: 121},
  {label:'Hall Green',value: 122},
  {label:'Whetstone',value: 124},
  {label:'Coulsdon',value: 129},
  {label:'New Malden',value: 131},
  {label:'Allington Park',value: 137},
  {label:'Bury St Edmunds',value: 140},
  {label:'Blaby',value: 141},
  {label:'Marlow',value: 146},
  {label:'Kingsthorpe',value: 148},
  {label:'East Sheen',value: 149},
  {label:'Four Oaks',value: 150},
  {label:'Westbury Park',value: 151},
  {label:'Leighton Buzzard',value: 154},
  {label:'Stourbridge',value: 155},
  {label:'Bromley',value: 158},
  {label:'Birch Hill',value: 159},
  {label:'Ramsgate',value: 160},
  {label:'Huntingdon',value: 163},
  {label:'Marlborough',value: 164},
  {label:'Green Street Green',value: 165},
  {label:'St Albans',value: 166},
  {label:'Stevenage',value: 167},
  {label:'Havant',value: 171},
  {label:'John Barnes',value: 174},
  {label:'Hertford',value: 175},
  {label:'Beaconsfield',value: 177},
  {label:'Enfield',value: 179},
  {label:'Goldsworth Park',value: 181},
  {label:'Sevenoaks',value: 182},
  {label:'St Neots',value: 185},
  {label:'Ruislip',value: 197},
  {label:'Banstead',value: 202},
  {label:'Ringwood',value: 203},
  {label:'Welwyn Garden City',value: 204},
  {label:'Ely',value: 205},
  {label:'Thame',value: 206},
  {label:'Chichester',value: 208},
  {label:'Southend',value: 213},
  {label:'Henley',value: 214},
  {label:'Finchley',value: 215},
  {label:'Godalming',value: 216},
  {label:'Monmouth',value: 217},
  {label:'Reading',value: 218},
  {label:'Cirencester',value: 220},
  {label:'Berkhamsted',value: 223},
  {label:'Putney',value: 225},
  {label:'Salisbury',value: 226},
  {label:'Billericay',value: 229},
  {label:'Horley',value: 233},
  {label:'Okehampton',value: 234},
  {label:'Waterlooville',value: 239},
  {label:'Biggin Hill',value: 240},
  {label:'Banstead',value: 324},
  {label:'Horsham New',value: 580},
  {label:'Heathfield',value: 595},
  {label:'Cambridge',value: 651},
  {label:'Hailsham',value: 653},
  {label:'Hythe',value: 654},
  {label:'Paddock Wood',value: 655},
  {label:'Saltash',value: 656},
  {label:'Sidmouth',value: 657},
  {label:'Sudbury',value: 658},
  {label:'Thatcham',value: 659},
  {label:'Worcester Park',value: 661},
  {label:'Wymondham',value: 662},
  {label:'Cheltenham',value: 663},
  {label:'Belgravia',value: 665},
  {label:'Tonbridge',value: 667},
  {label:'Chandlers Ford',value: 668},
  {label:'Portishead',value: 669},
  {label:'Romsey',value: 671},
  {label:'Wandsworth',value: 673},
  {label:'Newmarket',value: 674},
  {label:'Sandbach',value: 680},
  {label:'Fulham',value: 681},
  {label:'Towcester',value: 682},
  {label:'Abergavenny',value: 683},
  {label:'Hitchin',value: 685},
  {label:'Swaffham',value: 686},
  {label:'Newport',value: 687},
  {label:'Barry',value: 688},
  {label:'Worthing',value: 689},
  {label:'Otley',value: 691},
  {label:'Farnham',value: 692},
  {label:'Dartford',value: 693},
  {label:'Sheffield',value: 695},
  {label:'Wolverhampton',value: 696},
  {label:'Willerby',value: 697},
  {label:'Lichfield',value: 699},
  {label:'Wilmslow',value: 711},
  {label:'Lewes',value: 727},
  {label:'East Grinstead',value: 741},
  {label:'Buxton',value: 748},
  {label:'St Katharine Docks',value: 753},
  {label:'West Ealing',value: 764},
  {label:'Hersham',value: 765},
  {label:'Bishop s Stortford',value: 101},
  {label:'Buckhurst Hill',value: 102},
  {label:'Epsom',value: 104},
  {label:'Longfield',value: 109},
  {label:'Crowborough',value: 110},
  {label:'Holloway Road',value: 112},
  {label:'Milton Keynes',value: 115},
  {label:'Dibden',value: 118},
  {label:'Burgess Hill',value: 123},
  {label:'Temple Fortune',value: 125},
  {label:'Saffron Walden',value: 135},
  {label:'Evington',value: 136},
  {label:'Witney',value: 142},
  {label:'Harrow Weald',value: 143},
  {label:'Gosport',value: 152},
  {label:'Wantage',value: 153},
  {label:'Daventry',value: 156},
  {label:'Weybridge',value: 157},
  {label:'Winton',value: 161},
  {label:'Andover',value: 168},
  {label:'Southsea',value: 170},
  {label:'Kings Road',value: 173},
  {label:'Cobham',value: 176},
  {label:'Caterham',value: 178},
  {label:'Woodley',value: 180},
  {label:'Harpenden',value: 183},
  {label:'Caversham',value: 184},
  {label:'Northwood',value: 186},
  {label:'Richmond',value: 188},
  {label:'West Byfleet',value: 189},
  {label:'Sunningdale',value: 190},
  {label:'Barnet',value: 191},
  {label:'Chesham',value: 192},
  {label:'Bath',value: 193},
  {label:'Maidenhead',value: 194},
  {label:'Kingston',value: 195},
  {label:'Fleet',value: 196},
  {label:'Yateley',value: 198},
  {label:'Horsham',value: 200},
  {label:'Tenterden',value: 201},
  {label:'Bloomsbury',value: 207},
  {label:'Petersfield',value: 209},
  {label:'Stroud',value: 210},
  {label:'Abingdon',value: 211},
  {label:'Beckenham',value: 212},
  {label:'South Harrow',value: 219},
  {label:'Wokingham',value: 221},
  {label:'Norwich',value: 222},
  {label:'Bromley South',value: 224},
  {label:'Newark',value: 227},
  {label:'Gloucester Road',value: 230},
  {label:'South Woodford',value: 231},
  {label:'Surbiton',value: 232},
  {label:'Staines',value: 235},
  {label:'Marylebone',value: 236},
  {label:'Great Malvern',value: 237},
  {label:'Twyford',value: 238},
  {label:'Byres Road',value: 308},
  {label:'Weston Super Mare',value: 309},
  {label:'Wellington',value: 315},
  {label:'Ashbourne',value: 316},
  {label:'Storrington',value: 317},
  {label:'Menai Bridge',value: 318},
  {label:'Melksham',value: 319},
  {label:'Colchester',value: 455},
  {label:'JL Foodhall Oxford Street',value: 456},
  {label:'Pontprennau',value: 457},
  {label:'Crewkerne',value: 458},
  {label:'Kenilworth',value: 460},
  {label:'Eldon Square',value: 461},
  {label:'Westfield London',value: 462},
  {label:'Winchester',value: 463},
  {label:'Alcester',value: 474},
  {label:'Bridport',value: 475},
  {label:'Caldicot',value: 476},
  {label:'Croydon',value: 477},
  {label:'Haslemere',value: 478},
  {label:'Headington',value: 479},
  {label:'Holsworthy',value: 480},
  {label:'Leigh On Sea',value: 481},
  {label:'Ponteland',value: 482},
  {label:'Saxmundham',value: 483},
  {label:'Stamford',value: 484},
  {label:'Torquay',value: 485},
  {label:'Upminster',value: 486},
  {label:'Lutterworth',value: 487},
  {label:'Clerkenwell',value: 492},
  {label:'JL Foodhall Bluewater',value: 493},
  {label:'Altrincham',value: 494},
  {label:'Frimley',value: 652},
  {label:'Twickenham',value: 660},
  {label:'Canary Wharf',value: 664},
  {label:'Mill Hill',value: 670},
  {label:'Droitwich',value: 672},
  {label:'Wallingford',value: 675},
  {label:'Newbury',value: 676},
  {label:'Sanderstead',value: 677},
  {label:'Kensington',value: 678},
  {label:'Harrogate',value: 684},
  {label:'Rushden',value: 690},
  {label:'Lincoln',value: 694},
  {label:'Rickmansworth',value: 698},
  {label:'Ashford',value: 705},
  {label:'Cheadle Hulme',value: 710},
  {label:'Balham',value: 719},
  {label:'Southampton New',value: 720},
  {label:'Ampthill',value: 722},
  {label:'Durham',value: 730},
  {label:'Barbican',value: 732},
  {label:'Formby',value: 749},
  {label:'Comely Bank',value: 750},
  {label:'Christchurch',value: 754},
  {label:'Bayswater',value: 756},
  {label:'Eastbourne',value: 757},
  {label:'Chiswick',value: 760},
  {label:'Morningside',value: 761},
  {label:'Parkstone',value: 766},
  {label:'Clapham Junction',value: 767},
  {label:'Edgware Road',value: 768},
  {label:'Buckingham',value: 769},
  {label:'Windsor New',value: 772},
  {label:'Islington',value: 780},
  {label:'Hexham',value: 782},
  {label:'Harborne',value: 796},
  {label:'Brackley',value: 797},
  {label:'Lymington New',value: 798},
  {label:'Sandhurst',value: 799},
  {label:'Trinity Square',value: 833},
  {label:'Clifton',value: 834},
  {label:'Crouch End',value: 835},
  {label:'Oxted',value: 838},
  {label:'Enfield CFC',value: 199},
  {label:'Greenford CFC',value: 259},
  {label:'Evesham',value: 303},
  {label:'York',value: 311},
  {label:'Poynton',value: 312},
  {label:'East Cowes',value: 313},
  {label:'Wimbledon',value: 314},
  {label:'Knutsford',value: 326},
  {label:'Newton Mearns',value: 327},
  {label:'Stratford City',value: 328},
  {label:'Alton',value: 329},
  {label:'St Saviour (Jersey)',value: 332},
  {label:'Rohais (Guernsey)',value: 333},
  {label:'St Helier (Jersey)',value: 334},
  {label:'Admiral Park (Guernsey)',value: 335},
  {label:'Red Houses (Jersey)',value: 336},
  {label:'MOUNTSORREL',value: 403},
  {label:'Gerrards Cross',value: 459},
  {label:'Sevenoaks',value: 464},
  {label:'Marlow',value: 465},
  {label:'Cardiff Queen Street',value: 501},
  {label:'Acton',value: 502},
  {label:'Swindon',value: 504},
  {label:'Littlehampton',value: 505},
  {label:'Uckfield',value: 506},
  {label:'Hereford',value: 507},
  {label:'Malmesbury',value: 511},
  {label:'Coulsdon DFC',value: 513},
  {label:'Bagshot',value: 514},
  {label:'Nailsea',value: 515},
  {label:'Parsons Green',value: 516},
  {label:'Egham',value: 519},
  {label:'Jesmond',value: 520},
  {label:'Enfield Chase',value: 521},
  {label:'Sutton Coldfield',value: 522},
  {label:'Chippenham',value: 523},
  {label:'West Hampstead',value: 524},
  {label:'Shrewsbury',value: 525},
  {label:'Tottenham Court Road',value: 526},
  {label:'Dorking',value: 527},
  {label:'Wimbledon Hill',value: 528},
  {label:'Hawkhurst',value: 529},
  {label:'Fulham Palace Road',value: 530},
  {label:'Peterborough',value: 531},
  {label:'Canterbury',value: 533},
  {label:'Sceptre (Watford)',value: 534},
  {label:'Kensington Gardens',value: 535},
  {label:'Camden',value: 536},
  {label:'Addlestone',value: 542},
  {label:'Fitzroy Street',value: 552},
  {label:'Teignmouth',value: 554},
  {label:'Hornchurch',value: 555},
  {label:'Edenbridge',value: 556},
  {label:'Keynsham',value: 557},
  {label:'Spinningfields',value: 558},
  {label:'Cheam',value: 559},
  {label:'Alderley Edge',value: 560},
  {label:'Walton-on-Thames',value: 562},
  {label:'Locks Heath',value: 563},
  {label:'Burgh Heath',value: 567},
  {label:'Petts Wood',value: 568},
  {label:'Portman Square',value: 569},
  {label:'Burnt Common',value: 571},
  {label:'Walbrook',value: 573},
  {label:'Leeds',value: 574},
  {label:'Broxbourne',value: 575},
  {label:'Amersham',value: 578},
  {label:'Bayswater Temp',value: 579},
  {label:'Oxford Botley Road',value: 581},
  {label:'BASINGSTOKE',value: 582},
  {label:'Old Brompton Road',value: 583},
  {label:'Hazlemere',value: 584},
  {label:'Ealing',value: 586},
  {label:'West Kensington',value: 587},
  {label:'Palmers Green',value: 588},
  {label:'Guildford',value: 589},
  {label:'Kings Cross',value: 590},
  {label:'Wollaton',value: 591},
  {label:'Rustington',value: 596},
  {label:'BATTERSEA NINE ELMS',value: 598},
  {label:'UTTOXETER',value: 599},
  {label:'High Holborn',value: 601},
  {label:'Alderley Old',value: 602},
  {label:'Sherborne',value: 604},
  {label:'Hove',value: 605},
  {label:'Leek',value: 606},
  {label:'High Wycombe',value: 607},
  {label:'Hampton',value: 612},
  {label:'Pimlico',value: 614},
  {label:'Foregate Street',value: 615},
  {label:'Clapham Common',value: 616},
  {label:'Kings Cross Station',value: 619},
  {label:'Stirling',value: 620},
  {label:'North Walsham',value: 622},
  {label:'Aylesbury',value: 625},
  {label:'Milngavie',value: 630},
  {label:'Ipswich',value: 632},
  {label:'Manchester Piccadilly',value: 636},
  {label:'Highbury Corner',value: 637},
  {label:'Muswell Hill',value: 639},
  {label:'Knightsbridge',value: 641},
  {label:'Solihull',value: 642},
  {label:'Sidcup',value: 643},
  {label:'Notting Hill Gate',value: 644},
  {label:'Truro',value: 648},
  {label:'Worcester',value: 700},
  {label:'Warminster',value: 701},
  {label:'Exeter',value: 702},
  {label:'South Bank Tower',value: 703},
  {label:'Bracknell',value: 706},
  {label:'Stratford Upon Avon',value: 708},
  {label:'Walton-le-Dale',value: 721},
  {label:'Bedford',value: 725},
  {label:'Wootton',value: 726},
  {label:'Market Harborough',value: 728},
  {label:'Wells',value: 729},
  {label:'Poundbury',value: 733},
  {label:'Cowbridge',value: 735},
  {label:'ROEHAMPTON',value: 736},
  {label:'Battersea',value: 737},
  {label:'Bagshot Road',value: 738},
  {label:'Tubs Hill',value: 739},
  {label:'Greenwich',value: 740},
  {label:'Colmore Row (Birmingham)',value: 742},
  {label:'Ipswich (Corn Exchange)',value: 743},
  {label:'Kings Hill',value: 744},
  {label:'Chipping Sodbury',value: 751},
  {label:'Oakgrove',value: 752},
  {label:'Dorking',value: 755},
  {label:'Oundle',value: 758},
  {label:'Northwich',value: 759},
  {label:'Helensburgh',value: 771},
  {label:'Monument',value: 773},
  {label:'Little Waitrose at John Lewis Watford',value: 781},
  {label:'Victoria Street',value: 783},
  {label:'Vauxhall',value: 789},
  {label:'Horley - Brighton Road',value: 802},
  {label:'Wimborne',value: 805},
  {label:'Headington - London Road',value: 806},
  {label:'Guildford Worplesdon Road',value: 808},
  {label:'Little Waitrose John Lewis Southampton',value: 815},
  {label:'East Putney',value: 820},
  {label:'Meanwood',value: 828},
  {label:'Chester',value: 842},
  {label:'Raynes Park',value: 846},
  {label:'Oadby',value: 847},
  {label:'Leatherhead',value: 859},
  {label:'Victoria Bressenden Place',value: 860},
  {label:'SKY (OSTERLEY)',value: 865},
  {label:'Faringdon',value: 871},
  {label:'Haywards Heath',value: 873},
  {label:'Banbury',value: 874},
  {label:'Finchley Central',value: 876},
  {label:'Bromsgrove',value: 877},
  {label:'Winchmore Hill',value: 878},
];

export default function AddBranches() {

  const [selectedValue, setSelectedValue] = useState()

  const postAllBranchesData = () => {
    const branches = ['Peterborough', 'christmas']
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: '{"data" : ' + json + '}'
      body: JSON.stringify({ data: selectedValue })
      };
      fetch('/postbranches', requestOptions)
      .then((response) => response.json())
      // .then(data => this.setState({ postId: data.id }));
  }

  return(
    <div className="container" style={{padding : '50px'}}>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-12">
          <Select options={Countries} components={animatedComponents} styles={{  option: (provided) => ({
              ...provided,
              color: 'black',
              fontSize: '15px'
            }),}}
            onChange={(option) => {setSelectedValue(option)}}
            isMulti />
        </div>
        <div className="col-md-6" style={{ padding : '20px'}}><button onClick={postAllBranchesData} variant="contained" class='keyword'>Pick Branches</button></div>
      </div>
    </div>
  )

}
