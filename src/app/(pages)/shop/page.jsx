'use client'
import SearchField from "@/components/SearchField";
import HeroShop from "@/components/shop/HeroShop";
import { useState } from "react";


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Drawer } from "@mui/material";

export default function page(props) {
    const { window } = props;
    const [tab, setTab] = useState(0)
    const [selected, setSelected] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    const tabs = ['all', 'Fat Loss', 'Gain Muscle', 'Get Energetic']
    const products = {
        fatLoss: [1, 2, 3],
        gainMuscle: [1, 2, 3],
        getEnergetic: [1, 2, 3],
        all: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    const handleChange = (event) => {
        setSelected(event.target.value);
        setTab(event.target.value);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const selectFilter = (
        <Box sx={{ minWidth: 120, display: { sm: 'none' } }}>
            <FormControl fullWidth size="small">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    onChange={handleChange}
                    sx={{ padding: '4px 10px', bgcolor: '#993737', color: 'white' }}
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Fat Loss</MenuItem>
                    <MenuItem value={2}>Gain Muscle</MenuItem>
                    <MenuItem value={3}>Get Energetic</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )

    const drawer = (
        <Box sx={{ p: { xs: '20px', sm: '20px 50px' } }}>
            <div className="w-full h-[200px] bg-[lightgray] mx-auto rounded" />
            <h2 className="my-3 text-xl font-bold">Product Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero natus consequuntur dolore consequatur pariatur nostrum possimus itaque nam, odio harum minima velit sit. Sunt, dignissimos tenetur. Ducimus, magni cupiditate.</p>
            <button className="btn bg-[#993737] rounded drop-shadow mt-10 text-white w-full">Add to card</button>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <main className="">
            <HeroShop />
            <section className="py-5 px-[24px] md:px-[70px]">
                <div className="flex flex-row gap-[16px] justify-between my-[32px] font-[500] max-w-[55rem] mx-auto">
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {tabs.map((t, i) => (
                            <button onClick={() => setTab(i)} className={`px-[8px] md:px-3 py-1 ${i == tab ? 'bg-[#993737] text-white' : 'bg-[lightgray]'} rounded skew-x-[-9deg] mr-3`}>{t}</button>
                        ))}
                    </Box>
                    {selectFilter}
                    {/* <SearchField /> */}
                </div>
                <div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 max-w-[55rem] mx-auto">
                    {tab == 0 && products.all.map((p, i) => (
                        <div className="h-[160px] w-full md:h-[250px] bg-[#D9D9D9] rounded mx-auto" onClick={handleDrawerToggle} />
                    ))}
                    {tab == 1 && products.fatLoss.map((p, i) => (
                        <div className="h-[160px] w-full md:h-[250px] bg-[#D9D9D9] rounded mx-auto" />
                    ))}
                    {tab == 2 && products.gainMuscle.map((p, i) => (
                        <div className="h-[160px] w-full md:h-[250px] bg-[#D9D9D9] rounded mx-auto" />
                    ))}
                    {tab == 3 && products.getEnergetic.map((p, i) => (
                        <div className="h-[160px] w-full md:h-[250px] bg-[#D9D9D9] rounded mx-auto" />
                    ))}
                </div>
                {/* product drower */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '300px', sm: '500px' } },
                    }}
                >
                    {drawer}
                </Drawer>
            </section>
        </main>
    )
}
