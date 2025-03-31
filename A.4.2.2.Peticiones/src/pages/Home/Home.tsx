import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

import { ModelObject } from "../../models/ModelObject";
import { ModelData } from "../../models/ModelData";

import "./Home.css";

const API_URL = "http://192.168.236.234:8080/objects"; //Se debe cambiar localhost por la ip

function Home() {
    const [objects, setObjects] = useState<ModelObject[]>([]); //Lista de los objetos a mostrar
    const [newObject, setNewObject] = useState<string>(""); // Control del input de los datos de objeto
    const [objectId, setObjectId] = useState<string>(""); // Control del input de ID

    useEffect(() => {
        fetchObjects();
    }, []);

    const fetchObjects = async () => {
        //TODO Recuperar todos los ozjetos con axios

        const x = await axios.get(API_URL); // Hace una petición GET al servidor

        // La respuesta de axios es un objeto con la siguiente estructura:
        // {
        //     data: [], // Los datos reales del servidor
        //     status: 200, // Código de estado HTTP
        //     statusText: 'OK',
        //     headers: {}, // Cabeceras de la respuesta
        //     config: {} // Configuración usada para la petición
        //   }

        console.log('Este es el status', x.status); // Muestra los datos en consola

        const z = x.data.map((obj: any) => {
            return new ModelObject(obj.name, obj.data, obj.id); // Convierte cada objeto recibido en un ModelObject
        });
        setObjects(z); // Actualiza el estado con los nuevos objetos
    };



    // fetch para buscar con id
    const fetchObjectById = async () => {
        try {
            // Verificación del ID
            if (!objectId) {
                alert("Por favor, introduce un ID");
                return;
            }
    
            // Hacer la petición GET con fetch
            const response = await fetch(`${API_URL}/${objectId}`);
    
            // Verificar si la respuesta es correcta
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Convertir la respuesta a JSON y crear el objeto
            const data = await response.json();
            const object = new ModelObject(data.name, data.data, data.id);
    
            // Actualizar el estado con el objeto encontrado
            setObjects([object]);
        } catch (error) {
            console.error("Error fetching object:", error);
            alert("Error al buscar el objeto");
        }
    };

    const createObject = async () => {
        //TODO Crear un objecte per ID amb axios
    };

    const updateObject = async (id: string) => {
        //TODO Actualitzar un objecte per ID amb fetch
    };


    const deleteObject = async (id: string) => {
        //TODO Eliminar un objecte per ID amb fetch o axios
    };

    //Actualitzar el valor de l'objecte de l'input
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewObject(e.target.value);
    };

    //Actualitzar el valor de l'ID de l'input
    const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setObjectId(e.target.value);
    };

    return (
        <div className="container">
            <h1>Online Store</h1>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Nom, foto, descripció, preu"
                    value={newObject}
                    onChange={handleInputChange}
                />
                <button onClick={createObject}>Crear producte</button>
            </div>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="ID producte"
                    value={objectId}
                    onChange={handleIdChange}
                />
                <button onClick={fetchObjectById}>Buscar per ID</button>
            </div>
            <button className="refresh-btn" onClick={fetchObjects}>
                Mostrar tots els productes
            </button>
            <div className="object-list">
                {objects.map((obj) => (
                    <div key={obj.id} className="object-card">
                        <img src={obj.data.photo} alt={obj.name} className="object-photo" />
                        <div className="object-details">
                            <h2>{obj.name}</h2>
                            <p>{obj.data.description}</p>
                            <p className="object-price">{obj.data.getFormattedPrice()}</p>
                            <button onClick={() => updateObject(obj.id!)}>Actualitzar</button>
                            <button
                                className="delete-btn"
                                onClick={() => deleteObject(obj.id!)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
