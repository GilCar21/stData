
export interface PersonsInterface {
    birth_year?: string;
    created?: string;
    edited?: string;
    eye_color?: string;
    films?: string[];
    gender?: string;
    hair_color?: string;
    height?: string;
    homeworld?: string;
    mass?: string;
    name?: string;
    skin_color?: string;
    species?: string[];
    starships?: string[];
    url: string;
    vehicles?: string[];
  }
  
  export interface FilmInterface {
    characters?: string[];
    created?: string;
    director?: string;
    edited?: string;
    episode_id?: number;
    opening_crawl?: string;
    planets?: string[];
    producer?: string;
    release_date?: string;
    species?: string[];
    starships?: string[];
    title?: string;
    url: string;
    vehicles?: string[];
  }
  
  export interface PlanetInterface {
    name?: string;
    rotation_period?: string;
    orbital_period?: string;
    diameter?: string;
    climate?: string;
    gravity?: string;
    terrain?: string;
    surface_water?: string;
    population?: string;
    residents?: string[];
    films?: string[];
    url: string;
    created?: string;
    edited?: string;
  }
  
  export interface StarshipsInterface {
    name?: string;
    model?: string;
    manufacturer?: string;
    cost_in_credits?: string;
    length?: string;
    max_atmosphering_speed?: string;
    crew?: string;
    passengers?: string;
    cargo_capacity?: string;
    consumables?: string;
    hyperdrive_rating?: string;
    MGLT?: string;
    starship_class?: string;
    pilots?: string[];
    films?: string[];
    created?: string;
    edited?: string;
    url: string;
  }
  
  export interface VehiclesInterface {
    name?: string;
    model?: string;
    manufacturer?: string;
    cost_in_credits?: string;
    length?: string;
    max_atmosphering_speed?: string;
    crew?: string;
    passengers?: string;
    cargo_capacity?: string;
    consumables?: string;
    vehicles_class?: string;
    pilots?: string[];
    films?: string[];
    created?: string;
    edited?: string;
    url: string;
  }