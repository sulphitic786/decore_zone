import MenuItem from "../MenuItem";

export default function Navbar() {
    const categories = [{
        title: "Popular",
        children: [
            {
                title: "Best Space Heater",
            },
            {
                title: "Best Humidifier",
            },
            {
                title: "Noice Cancelling Headphones",
                children: [
                    {
                        title: "Best Space Heater",
                    },
                    {
                        title: "Best Humidifier",
                    },
                    {
                        title: "Noice Cancelling Headphones",
                        children: [
                            {
                                title: "Best Space Heater",
                            },
                            {
                                title: "Best Humidifier",
                            },
                            {
                                title: "Noice Cancelling Headphones",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Tech",
        children: [
            {
                title: "Best Space Heater",
            },
            {
                title: "Best Humidifier",
            },
            {
                title: "Noice Cancelling Headphones",
            }
        ]
    },
    {
        title: "Home & Garden",
        children: [
            {
                title: "Best Humidifier",
            },
            {
                title: "Noice Cancelling Headphones",
            }
        ]
    },
    {
        title: "Sleep",
        children: [
            {
                title: "Best Space Heater",
            },
            {
                title: "Best Humidifier",
            }
        ]
    },
    {
        title: "Kitchen",
        children: [
            {
                title: "Best Space Heater",
            },
            {
                title: "Noice Cancelling Headphones",
            }
        ]
    },
    {
        title: "Black Friday",
        children: [
            {
                title: "Best Space Heater",
            }
        ]
    },
    {
        title: "Gifts",
        children: [
            {
                title: "Best Humidifier",
            }
        ]
    },
    {
        title: "More Categories",
        children: [
            {
                title: "Noice Cancelling Headphones",
            }
        ]
    }];
    
    return <ul className="navbar">
        {categories.map((row, index) => <MenuItem item={row} key={index} />)}
    </ul>
  }