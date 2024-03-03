import { getData } from "@/service/get_data";
import Card from "./components/card/card";
import getColors from "@/service/filter_colors"

/**
 * main page of the app (<main> html tag). The root ("/") path of the app 
 * awaits for the data, filters the color
 * loop display of the card component
 * passing the api data to the card component as props
 * @returns a main (<main>) html tag with card - cards (depence from the api data)
 */
export default async function Home() {
  const { data } = await getData();

  const houseColors: string[] = data.map((i: any) => i.houseColours);
  const { colors } = await getColors(houseColors);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {data.map((house: any, i: number) => {
          return ( 
            <Card 
            key={i} 
            id={house.id} 
            houseName={house.name} 
            houseAnimal={house.animal} 
            houseColors={colors[i]} 
            houseFounder={house.founder}/>)
        })}
    </main>
  );
}
