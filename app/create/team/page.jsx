'use client'
import { useRef, useState } from "react";
import Image from "next/image";
import { Button, Form, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui"

import CitiesData from '@/data/cities.data.json'

import '@/styles/tailwind.css'
import styles from './create_team.module.css';
import { UploadCloud } from "lucide-react";

// export const metadata = {
    //     title: 'Crear Equipo - TornApp',
    //     description: 'Generated by create next app'
    // }
    
    export default function CreateTeamPage () {
        
        const badgeInputRef = useRef();
        
        const [badgeUrl, setBadgeUrl] = useState("https://res.cloudinary.com/dabmixcta/image/upload/v1707365070/tornapp/wb13hhynskcyr5m0dgxb.png")
        const [badgeFile, setBadgeFile] = useState(null)
        const [loadingFile, setLoadingFile] = useState(false)
        const [selectedCountry, setSelectedCountry] = useState('');
        const [selectedProvince, setSelectedProvince] = useState('');
        const [selectedCity, setSelectedCity] = useState('');
        
        const cloudUrl = 'https://api.cloudinary.com/v1_1/dabmixcta/image/upload';

        const uploadBadge = async ({target}) =>{
        if(target.files.length == 0) return;
        setLoadingFile(true)

        const cloudUrl = 'https://api.cloudinary.com/v1_1/dabmixcta/image/upload';

        const formData = new FormData();
        formData.append('upload_preset','tornapp');
        formData.append('file', target.files[0] );

        try {
    
            const resp = await fetch( cloudUrl, {
                method: 'POST',
                body: formData
            });

            if ( !resp.ok ) throw new Error('No se pudo subir imagen')
            const cloudResp = await resp.json();

            setBadgeUrl( cloudResp.secure_url )
        } catch (error) {
            console.log(error);
            throw new Error( error.message );
        }
        setLoadingFile(false)
    }

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedProvince('')
    };

    const handleProvinceChange = (province) => {
        setSelectedProvince(province);
    };
    const handleCityChange = (city) => {
        console.log(city);
        setSelectedCity(city)
    };

    const uploadNewBadge = async({target}) => {
        if(target.files.length == 0) {
            setBadgeFile(null)   
            return
        }

        setLoadingFile(true)


        const formData = new FormData();
        formData.append('upload_preset','tornapp');
        formData.append('file', target.files[0] );

        try {
    
            const resp = await fetch( cloudUrl, {
                method: 'POST',
                body: formData
            });

            if ( !resp.ok ) throw new Error('No se pudo subir imagen')
            const cloudResp = await resp.json();

            setBadgeUrl( cloudResp.secure_url )
            setBadgeFile(target.files[0].name)
        } catch (error) {
            setBadgeFile(null)
            console.log(error);
            throw new Error( error.message );
        }
        setLoadingFile(false)
    }

return (
<div className={styles.container}>
    <h3 className={`text-white text-4xl font-bold mb-5 ${styles.h3}`}>CREAR EQUIPO</h3 >
        <Form className={ `flex flex-col space-y-5 ${styles.form} `} >
        <div className="grid w-full items-center gap-4">
            <div className={styles.name_div}>
                <div>
                    <Label className={styles.label} htmlFor="name" >NOMBRE DEL EQUIPO</Label>
                    <Input id="name" placeholder="Nombre del equipo" className={ `${styles.input} ${styles.name}` } maxLength="18"/>
                </div>
                <div>
                    <Label className={styles.label} htmlFor="code" >ABREVIATURA</Label>
                    <Input
                        type="text"
                        name="code"
                        id="code"
                        placeholder="ABC"
                        maxLength="3"
                        pattern="[a-zA-Z0-9]*"
                        className={`w-20 text-center font-bold tracking-widest ${styles.input}`}
                    />

                </div>
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label className={styles.label} htmlFor="year">AÑO DE FUNDACIÓN</Label>
                <Select>
                    <SelectTrigger id="year" className='w-20' >
                    <SelectValue placeholder={new Date().getFullYear()} />
                    </SelectTrigger>
                    <SelectContent position="popper">
                    {[...Array(new Date().getFullYear() - 1899)]
                    .map((_, index) => new Date().getFullYear() - index)
                    .map((year, index) => (
                        <SelectItem value={year} key={year}>{year}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
            </div>

            <div className={styles.badge_div}>
                <div className={`flex flex-col space-y-1.5 ${styles.div}`}>
                    <Label className={styles.label} htmlFor="badge" >ESCUDO</Label>
                    <input type="file" id="badge" style={{display:'none'}} accept="image/png, image/jpeg, image/jpg" 
                           onChange={ uploadNewBadge }
                           ref={badgeInputRef}
                    />
                    
                    <div className={ styles.upload_badge } onClick={ () => badgeInputRef.current.click()}>
                        <UploadCloud color="white" size={24} strokeWidth={3} />
                        <div className={ styles.upload_badge_text }>
                            Seleccionar imagen
                        </div>                      
                    </div>
                    <span className={`${styles.upload_badge_data} ${styles.upload_badge_file}`}>{
                    badgeFile?
                    badgeFile
                    :
                    "Ningún archivo seleccionado"
                    }</span>
                    <span className={styles.upload_badge_data}>Resolución recomendada: 128x128px</span>
                    <div className={styles.upload_badge_data}>Archivo recomendado: png</div>
                </div>
                <div className={ styles.badge }>
                    { loadingFile?
                        <div className={ styles.loader_div }><div className={styles.loadership_QIDHR}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
                        :
                        <Image src={badgeUrl} alt="" width="120" height="120"/>
                    }
                </div>
            </div>
            
            <div className="flex flex-col space-y-1.5">
                <Label className={styles.label} htmlFor="country">PAÍS</Label>
                <Select onValueChange={handleCountryChange}>
                    <SelectTrigger id="country" name="country" className='w-36' value={selectedCountry} >
                        <SelectValue placeholder="-" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                    {Object.keys(CitiesData).map((year, index) => (
                        <SelectItem value={year} key={year}>{year}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>                            

                <Label className={styles.label} htmlFor="province">PROVINCIA</Label>
                <Select onValueChange={handleProvinceChange}>
                    <SelectTrigger id="province" name="province" className='w-36' value={selectedProvince}>
                        <SelectValue placeholder="-" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        {selectedCountry && CitiesData[selectedCountry] && Object.keys(CitiesData[selectedCountry]).map((province) => (
                            <SelectItem value={province} key={province}>{province}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>                        

                <Label className={styles.label} htmlFor="city">CIUDAD</Label>
                <Select onValueChange={handleCityChange}>
                    <SelectTrigger id="city" name="city" className='w-36' value={selectedCity}>
                        <SelectValue placeholder="-" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        {selectedCountry && selectedProvince && CitiesData[selectedCountry][selectedProvince] && CitiesData[selectedCountry][selectedProvince].map((city) => (
                            <SelectItem value={city} key={city}>{city}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>                            

                {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                /> */}

            </div>
            <Button className={`dark text-white w-40 center m-auto`} variant="outline" type="submit">
                CREAR
            </Button>
        </div>
        </Form>

        


</div>
)
}
