import { type } from "os"

export type SpotifyQueryResponse = {
    albums: SpotifyAlbumsResponse,
    artists: SpotifyArtistResponse,
    tracks: SpotifyTracksResponse,
    playlists: SpotifyPlaylistsResponse,
}

export type SpotifyAlbumsResponse = {
    href: string,
    items: SpotifyAlbum[],
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
}

export type SpotifyAlbum = {
    album_type: string,
    artists: SpotifyAlbumArtist[],
    available_markets: string[],
    external_urls: SpotifyExternalUrls,
    href: string,
    id: string,
    images: SpotifyImages[],
    name: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: string,
    uri: string,
}

export type SpotifyAlbumArtist = {
    external_urls: SpotifyExternalUrls,
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string,
}

export type SpotifyExternalUrls = {
    spotify: string,
}

export type SpotifyImages = {
    height: number,
    url: string,
    width: number,
}

export type SpotifyArtistResponse = {
    href: string,
    items: SpotifyArtist[],
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
}

export type SpotifyArtist = {
    external_urls: SpotifyExternalUrls,
    followers: SpotifyFollowers,
    genres: string[],
    href: string,
    id: string,
    images: SpotifyImages[],
    name: string,
    popularity: number,
    type: string,
    uri: string,
}

export type SpotifyFollowers = {
    href: string,
    total: number,
}

export type SpotifyTracksResponse = {
    href: string,
    items: SpotifyTrack[],
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
}

export type SpotifyTrack = {
    album: SpotifyAlbum,
    artists: SpotifyTrackArtist[],
    available_markets: string[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: SpotifyExternalIds,
    external_urls: SpotifyExternalUrls,
    href: string,
    id: string,
    is_local: boolean,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
}

export type SpotifyTrackArtist = {
    external_urls: SpotifyExternalUrls,
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string,
}

export type SpotifyExternalIds = {
    isrc: string,
}

export type SpotifyPlaylistsResponse = {
    href: string,
    items: SpotifyPlaylist[],
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
}

export type SpotifyPlaylist = {
    collaborative: boolean,
    description: string,
    external_urls: SpotifyExternalUrls,
    href: string,
    id: string,
    images: SpotifyImages[],
    name: string,
    owner: SpotifyOwner,
    primary_color: string,
    public: boolean,
    snapshot_id: string,
    tracks: SpotifyPlaylistTracks,
    type: string,
    uri: string,
}

export type SpotifyOwner = {
    display_name: string,
    external_urls: SpotifyExternalUrls,
    href: string,
    id: string,
    type: string,
    uri: string,
}

export type SpotifyPlaylistTracks = {
    href: string,
    total: number,
}