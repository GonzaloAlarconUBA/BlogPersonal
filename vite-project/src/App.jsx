import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Post } from "./components/Post";
import { useEffect } from "react";
import supabase from "./lib/helper/supabaseClient";

//use=hooks(agarrar cosas)
export default function App() {
  const [user, setUser] = useState(null); //useState define el valor con el que va a iniciar
  //setUser Funcion que actualiza una variable
  useEffect(() => {
    //useEffect ejecuta y renderiza depende de la variable [ ]

    const getSession = async () => {
      //destructuracion -> Nos permite obtener la propiedad deseada con las llaves
      const { data, error } = await supabase.auth.getSession();
      //await pide la sesion
      ///cuando llaves en vez de corchetes aggarra lo que necesito
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
        //signo de pregunta significa que puede existir o no
      }
    };
    getSession();
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOnAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Header />
      <button>Inicio Sesion Github</button>
      <Post
        titulo={"Titulo Ejemplo"}
        description={"Descripcion Foto"}
        link={""}
        parrafo={"Este es el parrafo de la foto"}
      />
      <Footer />
    </>
  );
}
