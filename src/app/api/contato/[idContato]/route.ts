import { NextResponse } from "next/server";
import { contatoFinal } from "../route";

export async function GET(request: Request,{params}:{params:{idContato:number}}) {
    try {
        const res  = await fetch(`http://localhost:8080/contato/${params.idContato}`);
        const data :contatoFinal  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao buscar contato", error);
        throw error; 
    }
}

export async function PUT(request: Request,{params}:{params:{idContato:number}}) {
    try {
        const contato : contatoFinal = await request.json();
        const res = await fetch(`http://localhost:8080/contato/${params.idContato}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },body:JSON.stringify(contato)
        })
        const data :contatoFinal  = await res.json(); 
        return NextResponse.json(data);
    } catch (error) {
        console.log("erro ao editar carro", error);
        throw error; 
    }
}
