import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';

interface Request {
    id: number
    entrada: string
    usuario: string
    nivel: string
    cliente: string
    cr: string
    fechaHora: string
    estatus: string
    aprobaciones: { fecha: string; aprobado: boolean }[]
    tramitador?: string
    finalizada?: boolean
    fechaHoraSolicitud?: string
    vecesRechazada?: number
    fechaHoraAceptacion?: string
    fechaHoraAsignacion?: string
    fechaHoraFinalizacion?: string
    ejecutivo?: string
    almacen?: string
  }
  
  const initialEjecutivos = [
    "Adrian Garduno - AICM",
    "Adriana Fabiola Bautista Reyes",
    "Alejandro Soule Berruuta AICM",
    "Angel Schmidt",
    "Armando Ledezzma",
    "Brenda Paola Contreras Ruiz",
    "Bryan Diaz Maza",
    "Cecilia Atzin Gonzalez Velazquez",
    "Dayana Paola Rodriguez Suarez",
    "Fatima Abril Gomez Cruz",
    "Fernando Salgado AICM",
    "Fredy Solorio",
    "Gerardo Silva",
    "Josfer Carranza",
    "Luis Antonio Granados Zamora",
    "Luis Ramirez",
    "Manuel Jimenez AICM",
    "Mara Ordoñez",
    "Marlene Tinoco Flores",
    "Raymundo Hernandez",
    "Reyna Zavala",
    "Rocio Izquierdo Ortega",
    "Samantha Alexa Hidalgo Maldonado",
    "Victor Betanzos",
    "Zurizaray Perales Gonzalez",
  ]
  
  const initialClientes = [
    "AUDI MEXICO S.A. DE C.V. - AAU0905000",
    "BAKER HUGHES PRODUCTS AND SERVICES S DE RL DE CV - GO&1103002",
    "BARCEL, S.A. DE C.V. - BAR1108002",
    "BIMBO, S.A. DE C.V. - BIM1108000",
    "BIOINTIMA DE MEXICO SA DE CV - BME0912000",
    "COMPAÑIA MINERA AUTLAN S.A.B. DE C.V. - MAU1005000",
    "CORPORATIVO BIMBO, S.A. DE C.V. - CBI0115001",
    "CYPLUS IDESA SAPI DE CV - CID0621000",
    "ERICSSON TELECOM,S,A. DE C.V - ETE0703001",
    "EXPLOSIVOS MEXICANOS S.A. DE C.V. - EME0707002",
    "FIELDCORE SERVICE SOLUTIONS INTERNATIONAL LLC - GSI0709000",
    "FORZAFORM SA DE CV - FOR1108000",
    "FTE MEXICANA SA DE CV - FME0618000",
    "GE MEDICAL SYSTEMS MONTERREY MEXICO, S.A. DE C.V. - GMS0324000",
    "GE SISTEMAS MEDICOS DE MEXICO S.A. DE C.V. - GSM0409000",
    "GE SISTEMAS MEDICOS DE MEXICO SA DE CV - GSM0409002",
    "GENERAL ELECTRIC GLOBAL SERVICES GMBH - GEG0326000",
    "KONE MEXICO SA DE CV - KME0401000",
    "LHM MANUFACTURING AND DISTRIBUTION S. DE R.L. DE C.V. - LMD0903000",
    "MASTERSENSE S DE RL DE CV - MAS0725000",
    "NOVIDESA S.A. DE C.V. - NOV0905000",
    "PEPSI  COLA MEXICANA S DE RL DE CV - PCM0210000",
    "PETRAMIN, S.A. DE C.V. - PET0817000",
    "PHILIPS MEXICO COMMERCIAL SA DE CV - PMC0701000",
    "PHILIPS MEXICO COMMERCIAL SA DE CV - PMC0701001",
    "PRIME WHEEL MEXICO S DE RL DE CV - PWM0507000",
    "RAVISA MEXICO, S.C. - RME0913000",
    "SCANIA COMERCIAL SA DE CV - SCO1124000",
    "SCHNEIDER ELECTRIC MEXICO SA DE CV - SEM0926001",
    "SCHNEIDER ELECTRIC MEXICO SA DE CV - SEM0926000",
    "SCHNEIDER INDUSTRIAL TLAXCALA SA DE CV - SIT1204000",
    "SKF DE MEXICO SA DE CV - SME1116001",
    "VOLKSWAGEN DE MEXICO. S.A. DE C.V. - VME0813000",
    "WATSON-MARLOW S. DE R.L DE CV - WAT0224000",
  ]
  
  const initialNiveles = [
    "BAJA",
    "MEDIA",
    "ALTA",
    "URGENTE",
  ]
  
  const initialCRs = [
    { clave: "3", recinto: "Aerovías de México, S.A. de C.V." },
    { clave: "4", recinto: "AAACESA Almacenes Fiscalizados, S.A. de C.V." },
    { clave: "6", recinto: "American Airlines de México, S.A. de C.V." },
    { clave: "7", recinto: "Talma México Servicios Aeroportuarios, S.A. de C.V." },
    { clave: "8", recinto: "CCO-SAASA Cargo, S.A." },
    { clave: "12", recinto: "DHL Express México, S.A. de C.V." },
    { clave: "13", recinto: "CCO Almacén Fiscal, S.A. de C.V." },
    { clave: "14", recinto: "Lufthansa Cargo Servicios Logísticos de M  xico, S.A. de C.V." },
    { clave: "15", recinto: "Tramitadores Asociados de Aerocarga, S.A. de C.V." },
    { clave: "16", recinto: "Transportación México Express, S.A. de C.V." },
    { clave: "17", recinto: "United Parcel Service de México, S.A. de C.V." },
    { clave: "262", recinto: "Interpuerto Multimodal de México, S.A. de C.V." },
    { clave: "263", recinto: "World Express Cargo de México, S.A. de C.V." },
    { clave: "279", recinto: "Talma Servicios de Carga, S.A. de C.V." },
    { clave: "288", recinto: "México Cargo Handling, S.A. de C.V." },
    { clave: "292", recinto: "Admerce, S.A. de C.V." },
    { clave: "293", recinto: "Terminal Logistics, S.A. de C.V." },
    { clave: "294", recinto: "Talma México Servicios Aeroportuarios, S.A. de C.V." },
    { clave: "295", recinto: "AAACESA Almacenes Fiscalizados, S.A. de C.V." },
    { clave: "296", recinto: "JC&JF Cargo, S.A. de C.V." },
    { clave: "297", recinto: "Interpuerto Multimodal de México, S.A. de C.V." },
  ]
  
  const tramitadores = [
    "ARTURO ALFREDO",
    "ALAN CRUZ CORONEL OCAMPO",
    "DIANA LAURA",
    "FERNANDO ZENDEJAS",
    "FELIPE FRANCO",
    "GRISELDA SALAZAR",
    "JOSE LUIS RODRIGUEZ",
    "HECTOR RAMIREZ",
    "ANTONIO ACEVEDO",
    "ERICK PERALTA BAÑUELOS",
    "FRANCISCO SILVESTRE SOLARES",
    "ELIZABETH ORTEGA REYES",
    "CESAR CARRILLO MONCADA",
    "NOLASCO BAUTISTA HERNANDEZ",
    "CHRISTIAN GARCIA CASTILLO",
  ]
  
  export default function RequestManager() {
    const [entorno, setEntorno] = useState<'ejecutivos' | 'tramitadores' | 'administracion'>('ejecutivos')
    const [requests, setRequests] = useState<Request[]>([])
    const [usuario, setUsuario] = useState('')
    const [nivel, setNivel] = useState('')
    const [entrada, setEntrada] = useState('')
    const [cliente, setCliente] = useState('')
    const [cr, setCr] = useState('')
    const [editingId, setEditingId] = useState<number | null>(null)
  
    const [ejecutivos, setEjecutivos] = useState(initialEjecutivos)
    const [clientes, setClientes] = useState(initialClientes)
    const [niveles, setNiveles] = useState(initialNiveles)
    const [crs, setCrs] = useState(initialCRs)
  
    const [selectedEjecutivo, setSelectedEjecutivo] = useState<string | null>(null)
    const [selectedCliente, setSelectedCliente] = useState<string | null>(null)
    const [selectedNivel, setSelectedNivel] = useState<string | null>(null)
    const [selectedCr, setSelectedCr] = useState<string | null>(null)
  
    const [filter, setFilter] = useState<'todos' | 'pendientes' | 'finalizadas'>('todos')
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (!usuario || !nivel || !entrada || !cliente || !cr || !validateEntrada(entrada)) {
        console.log("Por favor, complete todos los campos correctamente antes de enviar la solicitud.")
        return
      }
  
      const existingRequest = requests.find(req => req.entrada === entrada)
      if (existingRequest) {
        if (window.confirm("Esta entrada ya existe. ¿Es un segundo previo?")) {
          handleEdit(existingRequest.id)
          handleCreateRequest()
        }
        return
      }
  
      handleCreateRequest()
    }
  
    const handleCreateRequest = () => {
      const newRequest: Request = {
        id: requests.length + 1,
        entrada: entrada.toUpperCase().replace(/\s+/g, ''),
        usuario,
        nivel,
        cliente,
        cr,
        fechaHora: new Date().toISOString(),
        estatus: 'PENDIENTE',
        aprobaciones: [],
        fechaHoraSolicitud: new Date().toISOString(),
        vecesRechazada: 0,
        ejecutivo: usuario,
        almacen: crs.find(crItem => crItem.clave === cr)?.recinto || '',
      }
      setRequests([...requests, newRequest])
      setUsuario('')
      setNivel('')
      setEntrada('')
      setCliente('')
      setCr('')
      console.log("Solicitud creada y enviada a tramitadores")
    }
  
    const handleEdit = (id: number) => {
      const requestToEdit = requests.find(request => request.id === id)
      if (requestToEdit) {
        setUsuario(requestToEdit.usuario)
        setNivel(requestToEdit.nivel)
        setEntrada(requestToEdit.entrada)
        setCliente(requestToEdit.cliente)
        setCr(requestToEdit.cr)
        setEditingId(id)
      }
    }
  
    const handleDelete = (id: number) => {
      setRequests(requests.filter(request => request.id !== id))
    }
  
    const handleEntornoChange = (entorno: 'ejecutivos' | 'tramitadores' | 'administracion') => {
      setEntorno(entorno)
    }
  
    const handleAprobar = (id: number) => {
      const updatedRequests = requests.map(request =>
        request.id === id
          ? {
              ...request,
              estatus: 'ACEPTADA/PENDIENTE TRAMITADOR',
              aprobaciones: [...request.aprobaciones, { fecha: new Date().toISOString(), aprobado: true }],
              fechaHoraAceptacion: new Date().toISOString(),
            }
          : request
      )
      setRequests(updatedRequests)
      console.log("Solicitud aprobada")
    }
  
    const handleNegar = (id: number) => {
      const updatedRequests = requests.map(request =>
        request.id === id
          ? {
              ...request,
              estatus: 'ERROR DOCUMENTOS',
              aprobaciones: [...request.aprobaciones, { fecha: new Date().toISOString(), aprobado: false }],
              vecesRechazada: (request.vecesRechazada || 0) + 1,
            }
          : request
      )
      setRequests(updatedRequests)
      console.log("Solicitud negada")
    }
  
    const handleReenviar = (id: number) => {
      const updatedRequests = requests.map(request =>
        request.id === id
          ? {
              ...request,
              estatus: 'PENDIENTE',
              aprobaciones: [],
            }
          : request
      )
      setRequests(updatedRequests)
      console.log("Solicitud reenviada para corrección")
    }
  
    const handleAsignarTramitador = (id: number, tramitador: string) => {
      const updatedRequests = requests.map(request =>
        request.id === id
          ? {
              ...request,
              tramitador,
              estatus: 'EN PROCESO',
              fechaHoraAsignacion: request.fechaHoraAsignacion || new Date().toISOString(),
            }
          : request
      )
      setRequests(updatedRequests)
      console.log(`Solicitud asignada a ${tramitador}`)
    }
  
    const handleFinalizar = (id: number) => {
      const updatedRequests = requests.map(request =>
        request.id === id
          ? {
              ...request,
              estatus: 'FINALIZADO',
              finalizada: true,
              fechaHoraFinalizacion: new Date().toISOString(),
            }
          : request
      )
      setRequests(updatedRequests)
      console.log("Solicitud finalizada")
    }
  
    const handleUpdate = () => {
      if (!usuario || !nivel || !entrada || !cliente || !cr || !validateEntrada(entrada)) {
        console.log("Por favor, complete todos los campos correctamente antes de actualizar la solicitud.")
        return
      }
  
      const updatedRequests = requests.map(request =>
        request.id === editingId
          ? {
              ...request,
              usuario,
              nivel,
              entrada: entrada.toUpperCase().replace(/\s+/g, ''),
              cliente,
              cr,
              fechaHora: new Date().toISOString(),
              almacen: crs.find(crItem => crItem.clave === cr)?.recinto || '',
            }
          : request
      )
      setRequests(updatedRequests)
      setUsuario('')
      setNivel('')
      setEntrada('')
      setCliente('')
      setCr('')
      setEditingId(null)
      console.log("Solicitud actualizada")
    }
  
    const nivelOrder = { BAJA: 0, MEDIA: 1, ALTA: 2, URGENTE: 3 }
  
    const sortedRequests = [...requests].sort((a, b) => nivelOrder[a.nivel] - nivelOrder[b.nivel])
    const solicitudesPendientes = sortedRequests.filter(request => request.estatus !== 'FINALIZADO')
    const solicitudesFinalizadas = sortedRequests.filter(request => request.estatus === 'FINALIZADO')
  
    const handleAddEjecutivo = (nombre: string) => {
      setEjecutivos([...ejecutivos, nombre])
    }
  
    const handleAddCliente = (nombre: string) => {
      setClientes([...clientes, nombre])
    }
  
    const handleAddNivel = (nombre: string) => {
      setNiveles([...niveles, nombre])
    }
  
    const handleAddCr = (clave: string, recinto: string) => {
      setCrs([...crs, { clave, recinto }])
    }
  
    const handleDeleteEjecutivo = (nombre: string) => {
      setEjecutivos(ejecutivos.filter(ejecutivo => ejecutivo !== nombre))
    }
  
    const handleDeleteCliente = (nombre: string) => {
      setClientes(clientes.filter(cliente => cliente !== nombre))
    }
  
    const handleDeleteNivel = (nombre: string) => {
      setNiveles(niveles.filter(nivel => nivel !== nombre))
    }
  
    const handleDeleteCr = (clave: string) => {
      setCrs(crs.filter(cr => cr.clave !== clave))
    }
  
    const handleEditEjecutivo = (nombre: string, nuevoNombre: string) => {
      setEjecutivos(ejecutivos.map(ejecutivo => (ejecutivo === nombre ? nuevoNombre : ejecutivo)))
    }
  
    const handleEditCliente = (nombre: string, nuevoNombre: string) => {
      setClientes(clientes.map(cliente => (cliente === nombre ? nuevoNombre : cliente)))
    }
  
    const handleEditNivel = (nombre: string, nuevoNombre: string) => {
      setNiveles(niveles.map(nivel => (nivel === nombre ? nuevoNombre : nivel)))
    }
  
    const handleEditCr = (clave: string, nuevaClave: string, nuevoRecinto: string) => {
      setCrs(crs.map(cr => (cr.clave === clave ? { clave: nuevaClave, recinto: nuevoRecinto } : cr)))
    }
  
    const filteredRequests = () => {
      switch (filter) {
        case 'todos':
          return sortedRequests
        case 'pendientes':
          return solicitudesPendientes
        case 'finalizadas':
          return solicitudesFinalizadas
        default:
          return sortedRequests
      }
    }
  
    const pendientesCount = solicitudesPendientes.length
    const finalizadasCount = solicitudesFinalizadas.length
  
    const validateEntrada = (value: string): boolean => {
      const regex = /^EMX\d{7}(-\d+)?$/
      return regex.test(value)
    }
  
    const pendingRequestsCount = solicitudesPendientes.filter(req => new Date(req.entrada) < new Date() && req.estatus === 'PENDIENTE').length
  
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <header className="bg-primary text-primary-foreground shadow-lg">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Request Manager</h1>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => handleEntornoChange('ejecutivos')}>
                Ejecutivos
              </Button>
              <Button variant="outline" onClick={() => handleEntornoChange('tramitadores')}>
                Tramitadores
              </Button>
              <Button variant="outline" onClick={() => handleEntornoChange('administracion')}>
                Administración
              </Button>
            </div>
          </div>
        </header>
  
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button
              variant={filter === 'todos' ? 'default' : 'outline'}
              className="mr-2"
              onClick={() => setFilter('todos')}
            >
              Todos ({sortedRequests.length})
            </Button>
            <Button
              variant={filter === 'pendientes' ? 'default' : 'outline'}
              className="mr-2"
              onClick={() => setFilter('pendientes')}
            >
              Pendientes ({pendientesCount})
            </Button>
            <Button
              variant={filter === 'finalizadas' ? 'default' : 'outline'}
              onClick={() => setFilter('finalizadas')}
            >
              Finalizadas ({finalizadasCount})
            </Button>
          </div>
  
          {entorno === 'ejecutivos' && (
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Crear Solicitud</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="usuario">Nombre Ejecutivo</Label>
                      <Select
                        value={usuario}
                        onValueChange={(value) => setUsuario(value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select an executive" />
                        </SelectTrigger>
                        <SelectContent>
                          {ejecutivos.map((ejecutivo) => (
                            <SelectItem key={ejecutivo} value={ejecutivo}>
                              {ejecutivo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="nivel">Nivel</Label>
                      <Select
                        value={nivel}
                        onValueChange={(value) => setNivel(value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent>
                          {niveles.map((nivel) => (
                            <SelectItem key={nivel} value={nivel}>
                              {nivel}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="entrada">Entrada</Label>
                      <Input
                        id="entrada"
                        value={entrada}
                        onChange={(e) => setEntrada(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                        required
                      />
                      {!validateEntrada(entrada) && entrada && (
                        <p className="text-red-500 text-sm">Formato incorrecto. Debe ser EMX1234567 o EMX1234567-1</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="cliente">Cliente</Label>
                      <Select
                        value={cliente}
                        onValueChange={(value) => setCliente(value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a client" />
                        </SelectTrigger>
                        <SelectContent>
                          {clientes.map((cliente) => (
                            <SelectItem key={cliente} value={cliente}>
                              {cliente}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="cr">CR</Label>
                      <Select
                        value={cr}
                        onValueChange={(value) => setCr(value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a CR" />
                        </SelectTrigger>
                        <SelectContent>
                          {crs.map((crItem) => (
                            <SelectItem key={crItem.clave} value={crItem.clave}>
                              {crItem.clave} - {crItem.recinto}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" disabled={!usuario || !nivel || !entrada || !cliente || !cr || !validateEntrada(entrada)}>
                      {editingId !== null ? 'Update Request' : 'Create Request'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
  
              <Card>
                <CardHeader>
                  <CardTitle>Solicitudes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Usuario</TableHead>
                        <TableHead>Nivel</TableHead>
                        <TableHead>Entrada</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>CR</TableHead>
                        <TableHead>Fecha y Hora</TableHead>
                        <TableHead>Estatus</TableHead>
                        <TableHead>Tramitador</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRequests().map(request => (
                        <TableRow key={request.id}>
                          <TableCell>{request.usuario}</TableCell>
                          <TableCell>{request.nivel}</TableCell>
                          <TableCell>{request.entrada}</TableCell>
                          <TableCell>{request.cliente}</TableCell>
                          <TableCell>{request.cr}</TableCell>
                          <TableCell>{new Date(request.fechaHora).toLocaleString()}</TableCell>
                          <TableCell>{request.estatus}</TableCell>
                          <TableCell>{request.tramitador}</TableCell>
                          <TableCell className="flex space-x-2">
                            {request.estatus === 'PENDIENTE' && (
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handleDelete(request.id)}
                                title="Borrar Solicitud"
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            )}
                            {request.estatus === 'ERROR DOCUMENTOS' && (
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handleReenviar(request.id)}
                                title="Reenviar Solicitud"
                              >
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
  
          {entorno === 'tramitadores' && (
            <div className="overflow-hidden">
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Pendientes Anteriores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-center">{pendingRequestsCount}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Solicitudes Nuevas</CardTitle>
                </CardHeader>
                <CardContent className="overflow-y-auto max-h-[500px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Usuario</TableHead>
                        <TableHead>Nivel</TableHead>
                        <TableHead>Entrada</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>CR</TableHead>
                        <TableHead>Fecha y Hora</TableHead>
                        <TableHead>Estatus</TableHead>
                        <TableHead>Tramitador</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRequests().map(request => (
                        <TableRow key={request.id}>
                          <TableCell>{request.usuario}</TableCell>
                          <TableCell>{request.nivel}</TableCell>
                          <TableCell>{request.entrada}</TableCell>
                          <TableCell>{request.cliente}</TableCell>
                          <TableCell>{request.cr}</TableCell>
                          <TableCell>{new Date(request.fechaHora).toLocaleString()}</TableCell>
                          <TableCell>{request.estatus}</TableCell>
                          <TableCell>
                            {request.estatus === 'ACEPTADA/PENDIENTE TRAMITADOR' || request.estatus === 'EN PROCESO' ? (
                              <Select
                                value={request.tramitador || ''}
                                onValueChange={(value) => handleAsignarTramitador(request.id, value)}
                                disabled={request.finalizada}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select a tramitador" />
                                </SelectTrigger>
                                <SelectContent>
                                  {tramitadores.map((tramitador) => (
                                    <SelectItem key={tramitador} value={tramitador}>
                                      {tramitador}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            ) : (
                              request.tramitador || 'Sin asignar'
                            )}
                          </TableCell>
                          <TableCell className="flex space-x-2">
                            {request.estatus === 'PENDIENTE' && (
                              <>
                                <Button
                                  variant="success"
                                  size="icon"
                                  onClick={() => handleAprobar(request.id)}
                                  title="Aprobar Solicitud"
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  onClick={() => handleNegar(request.id)}
                                  title="Rechazar Solicitud"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                            {request.estatus === 'ACEPTADA/PENDIENTE TRAMITADOR' && (
                              <>
                                <Button
                                  variant="success"
                                  size="icon"
                                  onClick={() => handleAsignarTramitador(request.id, request.tramitador || '')}
                                  title="Asignar Tramitador"
                                  disabled={!request.tramitador || request.finalizada}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                            {request.estatus === 'EN PROCESO' && (
                              <Button
                                variant="default"
                                onClick={() => handleFinalizar(request.id)}
                                title="Finalizar Solicitud"
                                disabled={request.finalizada}
                              >
                                Finalizar Solicitud
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
  
          {entorno === 'administracion' && (
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Usuarios</CardTitle>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleAddEjecutivo(prompt("Nuevo Ejecutivo") || "")}
                        title="Agregar Ejecutivo"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Select
                          value={selectedEjecutivo}
                          onValueChange={(value) => setSelectedEjecutivo(value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an executive" />
                          </SelectTrigger>
                          <SelectContent>
                            {ejecutivos.map(ejecutivo => (
                              <SelectItem key={ejecutivo} value={ejecutivo}>
                                {ejecutivo}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {selectedEjecutivo && (
                          <div className="flex space-x-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                const nuevoNombre = prompt("Nuevo Nombre", selectedEjecutivo) || selectedEjecutivo
                                handleEditEjecutivo(selectedEjecutivo, nuevoNombre)
                                setSelectedEjecutivo(null)
                              }}
                              title="Editar Ejecutivo"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                handleDeleteEjecutivo(selectedEjecutivo)
                                setSelectedEjecutivo(null)
                              }}
                              title="Eliminar Ejecutivo"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Clientes</CardTitle>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleAddCliente(prompt("Nuevo Cliente") || "")}
                        title="Agregar Cliente"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Select
                          value={selectedCliente}
                          onValueChange={(value) => setSelectedCliente(value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a client" />
                          </SelectTrigger>
                          <SelectContent>
                            {clientes.map(cliente => (
                              <SelectItem key={cliente} value={cliente}>
                                {cliente}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {selectedCliente && (
                          <div className="flex space-x-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                const nuevoNombre = prompt("Nuevo Nombre", selectedCliente) || selectedCliente
                                handleEditCliente(selectedCliente, nuevoNombre)
                                setSelectedCliente(null)
                              }}
                              title="Editar Cliente"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                handleDeleteCliente(selectedCliente)
                                setSelectedCliente(null)
                              }}
                              title="Eliminar Cliente"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>CR</CardTitle>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          const clave = prompt("Clave del CR") || ""
                          const recinto = prompt("Recinto del CR") || ""
                          handleAddCr(clave, recinto)
                        }}
                        title="Agregar CR"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Select
                          value={selectedCr}
                          onValueChange={(value) => setSelectedCr(value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a CR" />
                          </SelectTrigger>
                          <SelectContent>
                            {crs.map(crItem => (
                              <SelectItem key={crItem.clave} value={crItem.clave}>
                                {crItem.clave} - {crItem.recinto}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {selectedCr && (
                          <div className="flex space-x-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                const nuevaClave = prompt("Nueva Clave", selectedCr) || selectedCr
                                const nuevoRecinto = prompt("Nuevo Recinto", crs.find(cr => cr.clave === selectedCr)?.recinto || "") || ""
                                handleEditCr(selectedCr, nuevaClave, nuevoRecinto)
                                setSelectedCr(null)
                              }}
                              title="Editar CR"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                handleDeleteCr(selectedCr)
                                setSelectedCr(null)
                              }}
                              title="Eliminar CR"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Nivel</CardTitle>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleAddNivel(prompt("Nuevo Nivel") || "")}
                        title="Agregar Nivel"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Select
                          value={selectedNivel}
                          onValueChange={(value) => setSelectedNivel(value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a level" />
                          </SelectTrigger>
                          <SelectContent>
                            {niveles.map(nivel => (
                              <SelectItem key={nivel} value={nivel}>
                                {nivel}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {selectedNivel && (
                          <div className="flex space-x-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                const nuevoNombre = prompt("Nuevo Nivel", selectedNivel) || selectedNivel
                                handleEditNivel(selectedNivel, nuevoNombre)
                                setSelectedNivel(null)
                              }}
                              title="Editar Nivel"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                handleDeleteNivel(selectedNivel)
                                setSelectedNivel(null)
                              }}
                              title="Eliminar Nivel"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Métricas de Solicitudes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Entrada</TableHead>
                        <TableHead>Ejecutivo</TableHead>
                        <TableHead>Almacén</TableHead>
                        <TableHead>Tramitador</TableHead>
                        <TableHead>Fecha y Hora de Solicitud</TableHead>
                        <TableHead>Veces Rechazada</TableHead>
                        <TableHead>Fecha y Hora de Aceptación</TableHead>
                        <TableHead>Fecha y Hora de Asignación</TableHead>
                        <TableHead>Fecha y Hora de Finalización</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRequests().map(request => (
                        <TableRow key={request.id}>
                          <TableCell>{request.id}</TableCell>
                          <TableCell>{request.entrada}</TableCell>
                          <TableCell>{request.ejecutivo}</TableCell>
                          <TableCell>{request.almacen}</TableCell>
                          <TableCell>{request.tramitador || 'Sin asignar'}</TableCell>
                          <TableCell>{request.fechaHoraSolicitud ? new Date(request.fechaHoraSolicitud).toLocaleString() : 'N/A'}</TableCell>
                          <TableCell>{request.vecesRechazada || 0}</TableCell>
                          <TableCell>{request.fechaHoraAceptacion ? new Date(request.fechaHoraAceptacion).toLocaleString() : 'N/A'}</TableCell>
                          <TableCell>{request.fechaHoraAsignacion ? new Date(request.fechaHoraAsignacion).toLocaleString() : 'N/A'}</TableCell>
                          <TableCell>{request.fechaHoraFinalizacion ? new Date(request.fechaHoraFinalizacion).toLocaleString() : 'N/A'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
  
        <footer className="bg-muted mt-8">
          <div className="container mx-auto px-4 py-6 text-center">
            <p>&copy; 2023 Request Manager. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
  
  