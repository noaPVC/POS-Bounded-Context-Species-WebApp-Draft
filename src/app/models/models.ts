export interface DangerousFeed {
    DangerousFeedId: string
    Headline: string
    Body: string
    OccuresAtFrom: Date
    OccuresAtTill: Date
    DepthStartInMeter: number
    DepthEndInMeter: number
    Area: null
    Species: FishSpecies[]
}

export interface FishSpecies {
    SpeciesId: string
    Name: string
    Population: number
    SpeciesTypeId: number
    OccuresIn: WaterType
    OccuresAt: Occurrence[]
}

export interface DepthNode {
    SpeciesId: string
    SpeciesName: string
    DepthStartInMeter: number
    DepthEndInMeter: number
}

export interface Occurrence {
    Area: null
    DepthStartInMeter: number
    DepthEndInMeter: number
}

// enums

export enum WaterType {
    Sweet = 0,
    Salt = 1,
    Both = 2
}