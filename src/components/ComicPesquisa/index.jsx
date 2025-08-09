import { useEffect, useState } from "react";
import { SectionSearch, InputSearch } from "./styles";

export default function ComicPesquisa({ value, onChange }) {
    const [local, setLocal] = useState(value);


    useEffect(() => {
        const t = setTimeout(() => onChange(local.trim()), 300);
        return () => clearTimeout(t);
    }, [local, onChange]);


    useEffect(() => setLocal(value), [value]);

    return (
        <SectionSearch>
            <InputSearch
                placeholder="Buscar HQ..."
                value={local}
                onChange={(e) => setLocal(e.target.value)}
            />
        </SectionSearch>
        
    );
}