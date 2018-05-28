skills: string[] = [];
langs: string[] = ['English','French','German',]
skills: Array = new Array();
skills: string[] = ['Java', 'Angular'];
skills: Array = ['Java', 'Angular'];
this.skills.push('.Net');
-----------------------------------------
  public static Products: Product[] = [
{
'id': 11,
'title': 'OPPO F5 Youth (Gold, 32 GB)'
},
{
'id': 12,
'title': 'Dell Inspiron 7000'
}
];
-----------------------------------------
peopleByCountry: any[] = [
{
  'country': 'UK',
  'people': [
    {
    "name": "Douglas Pace"
    },
    {
     "name": "Mcleod Mueller"
    },
  ]
},
{
  'country': 'US',
  'people': [
  {
  "name": "Day Meyers"
  },
  {
  "name": "Aguirre Ellis"
  },
  {
  "name": "Cook Tyson"
  }
  ]
}
];

<ul *ngFor="let group of peopleByCountry"> ①
<li>{{ group.country }}</li>
<ul>
<li *ngFor="let person of group.people"> ②
{{ person.name }}
</li>
</ul>
</ul>
----------------------------------------
export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
------------------------------------------
 messages: string[] = [];
 
  add(message: string) {
    this.messages.push(message);
  }
 
  clear() {
    this.messages = [];
  }
-------------------------------------------
  return of(HEROES.find(hero => hero.id === id));
--------------------------------------------
