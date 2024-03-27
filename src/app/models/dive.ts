export interface DivePreview {
  id: number;
  date: Date;
  weather: string;
  rating: number;
  entry: string;
  comments: string;
  operator: number;
}

export interface Dive {
  id: number;
  date: Date;
  rating: number;
  weather: string;
  visibilityDistance: {
    visibilityDistanceValue: number;
    distanceUnit: string;
  };
  visibilityRating: string;
  waterTemperature: {
    temperatureValue: number;
    temperatureUnit: string;
  };
  airTemperature: {
    temperatureValue: number;
    temperatureUnit: string;
  };
  entry: string;
  operator: number;
  comments: string;
  buddy: number;
  diveType: string;
  superDive: number;
  diveVacation: number;
  equipment: number;
}
