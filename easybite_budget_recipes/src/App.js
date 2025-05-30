import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main container for the EasyBite: Budget-Friendly Recipes for Beginners.
   * Implements a visually clean/top-aligned column layout,
   * clear sections for each feature, and beginner-friendly UI.
   *
   * REF: Now allows users to select a recipe column/category, showing only that column at a time.
   */

  // Category data - same order as the visual and matches the category card content below
  const CATEGORIES = [
    {
      id: 'five-ingredients',
      label: '5-Ingredient Recipes',
      icon: '🖐️',
      description: "Minimal fuss, minimal shopping—delicious meals with just five ingredients!",
      recipes: [
        {
          name: "One-Pan Chicken & Veggies",
          steps: [
            "Preheat oven to 200°C/400°F.",
            "Spread chopped chicken breast and mixed veggies (like bell peppers and zucchini) on a baking tray.",
            "Drizzle with olive oil, sprinkle with salt, pepper, and Italian herbs.",
            "Toss to coat, then spread out evenly.",
            "Roast for 20–25 min, stirring once, until chicken is cooked and veggies are tender."
          ]
        },
        {
          name: "Pasta with Tomato & Basil",
          steps: [
            "Cook pasta in boiling salted water until tender; drain.",
            "Heat olive oil in a pan, add chopped tomatoes and cook 5 min.",
            "Add cooked pasta to pan, toss to coat.",
            "Stir in torn fresh basil, and season with salt and pepper.",
            "Serve hot with grated cheese if desired."
          ]
        },
        {
          name: "Egg Fried Rice",
          steps: [
            "Cook rice and let it cool (or use leftover rice).",
            "Heat oil in a pan; add beaten eggs and scramble.",
            "Add rice and frozen peas/carrot mix; stir-fry 3 min.",
            "Season with soy sauce.",
            "Serve hot, garnished with green onions."
          ]
        },
        {
          name: "Simple Bean Tacos",
          steps: [
            "Heat canned black or pinto beans in a saucepan with taco seasoning.",
            "Warm tortillas in a pan or microwave.",
            "Spoon beans into tortillas.",
            "Top with shredded cheese and salsa.",
            "Fold and enjoy."
          ]
        },
        {
          name: "Cheesy Vegetable Quesadilla",
          steps: [
            "Place grated cheese and thinly sliced veggies (like bell pepper or spinach) on one half of a tortilla.",
            "Fold tortilla in half.",
            "Cook in a nonstick skillet over medium heat until golden, flip and cook other side.",
            "Slice into wedges.",
            "Serve with salsa or sour cream."
          ]
        },
        {
          name: "Creamy Avocado Toast",
          steps: [
            "Toast bread slices.",
            "Mash a ripe avocado with a pinch of salt and lemon juice.",
            "Spread avocado mash on toast.",
            "Sprinkle with chili flakes or black pepper.",
            "Enjoy immediately."
          ]
        },
        {
          name: "Honey Mustard Chicken Thighs",
          steps: [
            "In a bowl, mix honey, mustard, olive oil, salt, and pepper.",
            "Coat chicken thighs in the mixture.",
            "Place in a baking dish.",
            "Bake at 200°C/400°F for 25–30 minutes, until cooked through.",
            "Serve with your favorite side."
          ]
        },
        {
          name: "Garlic Butter Shrimp",
          steps: [
            "Heat butter in a skillet over medium heat.",
            "Add minced garlic and cook for 30 seconds.",
            "Add peeled shrimp, cook until pink (2–3 min per side).",
            "Season with salt and pepper.",
            "Serve hot with lemon wedges."
          ]
        },
        {
          name: "Sausage & Potato Skillet",
          steps: [
            "Slice sausages and potatoes thinly.",
            "Heat oil in a skillet.",
            "Add sausages and potatoes; season with salt, pepper, and paprika.",
            "Cook, stirring occasionally, until potatoes are fork-tender.",
            "Serve hot."
          ]
        },
        {
          name: "Easy Caprese Salad",
          steps: [
            "Slice fresh mozzarella and tomatoes.",
            "Alternate slices on a plate.",
            "Tuck fresh basil leaves between layers.",
            "Drizzle with olive oil and balsamic vinegar.",
            "Sprinkle with salt and serve."
          ]
        }
      ]
    },
    {
      id: 'student-meals',
      label: 'Student Meals',
      icon: '🕒',
      description: "Quick, affordable and filling recipes you can prepare in under 30 minutes.",
      recipes: [
        {
          name: "One-Pan Chicken & Veggies",
          steps: [
            "Preheat oven to 200°C/400°F.",
            "Spread chopped chicken breast and mixed veggies (like bell peppers and zucchini) on a baking tray.",
            "Drizzle with olive oil, sprinkle with salt, pepper, and Italian herbs.",
            "Toss to coat, then spread out evenly.",
            "Roast for 20–25 min, stirring once, until chicken is cooked and veggies are tender."
          ]
        },
        {
          name: "Pasta with Tomato & Basil",
          steps: [
            "Cook pasta in boiling salted water until tender; drain.",
            "Heat olive oil in a pan, add chopped tomatoes and cook 5 min.",
            "Add cooked pasta to pan, toss to coat.",
            "Stir in torn fresh basil, and season with salt and pepper.",
            "Serve hot with grated cheese if desired."
          ]
        },
        {
          name: "Egg Fried Rice",
          steps: [
            "Cook rice and let it cool (or use leftover rice).",
            "Heat oil in a pan; add beaten eggs and scramble.",
            "Add rice and frozen peas/carrot mix; stir-fry 3 min.",
            "Season with soy sauce.",
            "Serve hot, garnished with green onions."
          ]
        },
        {
          name: "Simple Bean Tacos",
          steps: [
            "Heat canned black or pinto beans in a saucepan with taco seasoning.",
            "Warm tortillas in a pan or microwave.",
            "Spoon beans into tortillas.",
            "Top with shredded cheese and salsa.",
            "Fold and enjoy."
          ]
        },
        {
          name: "Cheesy Vegetable Quesadilla",
          steps: [
            "Place grated cheese and thinly sliced veggies (like bell pepper or spinach) on one half of a tortilla.",
            "Fold tortilla in half.",
            "Cook in a nonstick skillet over medium heat until golden, flip and cook other side.",
            "Slice into wedges.",
            "Serve with salsa or sour cream."
          ]
        },
        {
          name: "Creamy Avocado Toast",
          steps: [
            "Toast bread slices.",
            "Mash a ripe avocado with a pinch of salt and lemon juice.",
            "Spread avocado mash on toast.",
            "Sprinkle with chili flakes or black pepper.",
            "Enjoy immediately."
          ]
        },
        {
          name: "Honey Mustard Chicken Thighs",
          steps: [
            "In a bowl, mix honey, mustard, olive oil, salt, and pepper.",
            "Coat chicken thighs in the mixture.",
            "Place in a baking dish.",
            "Bake at 200°C/400°F for 25–30 minutes, until cooked through.",
            "Serve with your favorite side."
          ]
        },
        {
          name: "Garlic Butter Shrimp",
          steps: [
            "Heat butter in a skillet over medium heat.",
            "Add minced garlic and cook for 30 seconds.",
            "Add peeled shrimp, cook until pink (2–3 min per side).",
            "Season with salt and pepper.",
            "Serve hot with lemon wedges."
          ]
        },
        {
          name: "Sausage & Potato Skillet",
          steps: [
            "Slice sausages and potatoes thinly.",
            "Heat oil in a skillet.",
            "Add sausages and potatoes; season with salt, pepper, and paprika.",
            "Cook, stirring occasionally, until potatoes are fork-tender.",
            "Serve hot."
          ]
        },
        {
          name: "Easy Caprese Salad",
          steps: [
            "Slice fresh mozzarella and tomatoes.",
            "Alternate slices on a plate.",
            "Tuck fresh basil leaves between layers.",
            "Drizzle with olive oil and balsamic vinegar.",
            "Sprinkle with salt and serve."
          ]
        }
      ]
    },
    {
      id: 'vegan-protein',
      label: 'Vegan Options by Protein',
      icon: '🌱',
      description: "Find vegan meals by your favorite protein: beans, lentils, tofu, and more.",
      recipes: [
        {
          name: "One-Pan Chicken & Veggies",
          steps: [
            "Preheat oven to 200°C/400°F.",
            "Spread chopped chicken breast and mixed veggies (like bell peppers and zucchini) on a baking tray.",
            "Drizzle with olive oil, sprinkle with salt, pepper, and Italian herbs.",
            "Toss to coat, then spread out evenly.",
            "Roast for 20–25 min, stirring once, until chicken is cooked and veggies are tender."
          ]
        },
        {
          name: "Pasta with Tomato & Basil",
          steps: [
            "Cook pasta in boiling salted water until tender; drain.",
            "Heat olive oil in a pan, add chopped tomatoes and cook 5 min.",
            "Add cooked pasta to pan, toss to coat.",
            "Stir in torn fresh basil, and season with salt and pepper.",
            "Serve hot with grated cheese if desired."
          ]
        },
        {
          name: "Egg Fried Rice",
          steps: [
            "Cook rice and let it cool (or use leftover rice).",
            "Heat oil in a pan; add beaten eggs and scramble.",
            "Add rice and frozen peas/carrot mix; stir-fry 3 min.",
            "Season with soy sauce.",
            "Serve hot, garnished with green onions."
          ]
        },
        {
          name: "Simple Bean Tacos",
          steps: [
            "Heat canned black or pinto beans in a saucepan with taco seasoning.",
            "Warm tortillas in a pan or microwave.",
            "Spoon beans into tortillas.",
            "Top with shredded cheese and salsa.",
            "Fold and enjoy."
          ]
        },
        {
          name: "Cheesy Vegetable Quesadilla",
          steps: [
            "Place grated cheese and thinly sliced veggies (like bell pepper or spinach) on one half of a tortilla.",
            "Fold tortilla in half.",
            "Cook in a nonstick skillet over medium heat until golden, flip and cook other side.",
            "Slice into wedges.",
            "Serve with salsa or sour cream."
          ]
        },
        {
          name: "Creamy Avocado Toast",
          steps: [
            "Toast bread slices.",
            "Mash a ripe avocado with a pinch of salt and lemon juice.",
            "Spread avocado mash on toast.",
            "Sprinkle with chili flakes or black pepper.",
            "Enjoy immediately."
          ]
        },
        {
          name: "Honey Mustard Chicken Thighs",
          steps: [
            "In a bowl, mix honey, mustard, olive oil, salt, and pepper.",
            "Coat chicken thighs in the mixture.",
            "Place in a baking dish.",
            "Bake at 200°C/400°F for 25–30 minutes, until cooked through.",
            "Serve with your favorite side."
          ]
        },
        {
          name: "Garlic Butter Shrimp",
          steps: [
            "Heat butter in a skillet over medium heat.",
            "Add minced garlic and cook for 30 seconds.",
            "Add peeled shrimp, cook until pink (2–3 min per side).",
            "Season with salt and pepper.",
            "Serve hot with lemon wedges."
          ]
        },
        {
          name: "Sausage & Potato Skillet",
          steps: [
            "Slice sausages and potatoes thinly.",
            "Heat oil in a skillet.",
            "Add sausages and potatoes; season with salt, pepper, and paprika.",
            "Cook, stirring occasionally, until potatoes are fork-tender.",
            "Serve hot."
          ]
        },
        {
          name: "Easy Caprese Salad",
          steps: [
            "Slice fresh mozzarella and tomatoes.",
            "Alternate slices on a plate.",
            "Tuck fresh basil leaves between layers.",
            "Drizzle with olive oil and balsamic vinegar.",
            "Sprinkle with salt and serve."
          ]
        }
      ]
    },

    // New category: Late-Night Cravings
    {
      id: 'late-night-cravings',
      label: 'Late-Night Cravings',
      icon: '🌙',
      description: "Satisfy that midnight hunger with easy, fast, and comforting eats.",
      recipes: [
        {
          name: "Instant Noodle Ramen Hack",
          steps: [
            "Boil water and cook instant noodles as per instructions.",
            "Add beaten egg and stir for extra protein.",
            "Top with chili flakes, green onion, or leftover veggies.",
            "Serve hot in a bowl right away."
          ]
        },
        {
          name: "Microwave Nacho Plate",
          steps: [
            "Arrange tortilla chips on a microwave-safe plate.",
            "Sprinkle generously with cheese and add sliced jalapeños if desired.",
            "Microwave for 30–45 seconds until cheese is melted.",
            "Top with salsa or sour cream and enjoy."
          ]
        },
        {
          name: "Peanut Butter Chocolate Toast",
          steps: [
            "Toast bread slices.",
            "Spread with peanut butter.",
            "Add a light drizzle of chocolate syrup or sprinkle chocolate chips.",
            "Enjoy warm for a quick treat."
          ]
        },
        {
          name: "Egg & Cheese Mug Muffin",
          steps: [
            "Beat 1 egg in a mug and add cheese and a bit of bread torn into chunks.",
            "Microwave 50–70 seconds until set.",
            "Flip onto a plate or eat right from the mug."
          ]
        },
        {
          name: "Cereal Parfait",
          steps: [
            "Layer yogurt and breakfast cereal in a glass or cup.",
            "Top with a drizzle of honey or sliced fruit.",
            "Scoop with a spoon and enjoy."
          ]
        },
        {
          name: "Apple Cinnamon Wrap",
          steps: [
            "Slice an apple and toss with cinnamon and a little sugar.",
            "Wrap in a tortilla and microwave 30 seconds.",
            "Roll up and eat like a warm apple pie snack."
          ]
        },
        {
          name: "Quesadilla Roll-Ups",
          steps: [
            "Place shredded cheese on a tortilla.",
            "Roll it up tightly.",
            "Microwave for 30 seconds or until cheese is melted.",
            "Slice into rounds if desired."
          ]
        },
        {
          name: "Mini Pita Pizzas",
          steps: [
            "Halve a mini pita and spread with tomato sauce.",
            "Top with cheese and any quick toppings (pepperoni, olives).",
            "Microwave or toast until cheese is bubbly, about 1 min."
          ]
        },
        {
          name: "Sweet Banana Mug Cake",
          steps: [
            "Mash half a banana in a mug.",
            "Mix in 3 tbsp flour, 1 tbsp sugar, a dash of baking powder, and milk to form a batter.",
            "Microwave about 75–90 seconds.",
            "Eat warm with a spoon."
          ]
        },
        {
          name: "Butter Popcorn Bowl",
          steps: [
            "Place popcorn kernels or a bag in the microwave.",
            "Cook as directed until popping slows.",
            "Toss finished popcorn in melted butter and salt."
          ]
        }
      ]
    },

    // New category: Leftovers Remix
    {
      id: 'leftovers-remix',
      label: 'Leftovers Remix',
      icon: '🔁',
      description: "Transform yesterday's leftovers into a delicious new meal!",
      recipes: [
        {
          name: "Leftover Stir-Fry",
          steps: [
            "Slice up leftover meat and/or veggies.",
            "Heat oil in a pan and add leftovers with soy sauce or a stir-fry sauce.",
            "Cook over high heat, stirring for a few minutes.",
            "Serve over rice or noodles."
          ]
        },
        {
          name: "Rice Omelette",
          steps: [
            "Beat a few eggs in a bowl.",
            "Stir in leftover rice and some veggies or cheese.",
            "Cook in a skillet till set and golden.",
            "Fold and serve hot."
          ]
        },
        {
          name: "Souped-Up Noodles",
          steps: [
            "Bring broth or water to a boil, add instant noodles.",
            "Add leftover proteins (chicken, beef, tofu) and vegetables.",
            "Simmer until heated through."
          ]
        },
        {
          name: "Cheesy Casserole Bake",
          steps: [
            "Combine leftover cooked pasta, sauce, and vegetables/meat in a casserole dish.",
            "Top with cheese.",
            "Bake at 190°C/375°F until bubbly and golden, about 15–20 minutes."
          ]
        },
        {
          name: "Mashed Potato Patties",
          steps: [
            "Mix leftover mashed potatoes with an egg and some flour.",
            "Shape into patties.",
            "Pan-fry in oil until both sides are golden."
          ]
        },
        {
          name: "Wrap It Up",
          steps: [
            "Fill a tortilla with leftover salad, meat, or roasted veggies.",
            "Add sauce or cheese if desired.",
            "Wrap tightly and grill or toast until warm."
          ]
        },
        {
          name: "Pizza Toasts",
          steps: [
            "Top bread slices with leftover pasta sauce and bits of meat or veggies.",
            "Sprinkle with cheese.",
            "Toast or bake until cheese melts."
          ]
        },
        {
          name: "Leftover Fried Rice",
          steps: [
            "Heat oil in a pan.",
            "Stir-fry leftover rice with chopped leftovers and a splash of soy sauce.",
            "Add a scrambled egg for protein, then serve."
          ]
        },
        {
          name: "Savory Breakfast Hash",
          steps: [
            "Chop leftover potatoes/meat/veggies.",
            "Sauté in a skillet with a little oil until crispy.",
            "Top with a fried egg if desired."
          ]
        },
        {
          name: "Taco Salad Bowl",
          steps: [
            "Layer leftover taco filling, beans, and rice in a bowl.",
            "Top with lettuce, salsa, and a dollop of yogurt or sour cream."
          ]
        }
      ]
    },

    // New category: No-Cook Recipes
    {
      id: 'no-cook-recipes',
      label: 'No-Cook Recipes',
      icon: '🥗',
      description: "Quick recipes for when you don't want to turn on the stove—perfect for hot days or dorms!",
      recipes: [
        {
          name: "Mediterranean Chickpea Salad",
          steps: [
            "Drain and rinse a can of chickpeas.",
            "Mix with chopped cucumber, tomato, red onion, and olives.",
            "Dress with olive oil, lemon juice, salt, and pepper."
          ]
        },
        {
          name: "Tuna Salad Lettuce Wraps",
          steps: [
            "Mix canned tuna with mayonnaise, a squeeze of lemon, salt, and pepper.",
            "Spoon into cleaned lettuce leaves.",
            "Top with sliced tomato or cucumber."
          ]
        },
        {
          name: "PB&J Overnight Oats",
          steps: [
            "In a jar, combine rolled oats, milk, and a spoonful of peanut butter.",
            "Add a swirl of jam or chopped fruit.",
            "Stir and refrigerate overnight. Eat cold."
          ]
        },
        {
          name: "Classic Caprese Stack",
          steps: [
            "Slice fresh mozzarella and tomatoes.",
            "Layer with fresh basil leaves.",
            "Drizzle with olive oil and balsamic vinegar."
          ]
        },
        {
          name: "DIY Lunchbox Snack Box",
          steps: [
            "Fill a container with cubed cheese, crackers, nuts, and sliced veggies.",
            "Add a dip like hummus if desired.",
            "Pack for lunch or snack time."
          ]
        },
        {
          name: "Chilled Bean & Corn Salsa",
          steps: [
            "Mix canned beans, corn, diced peppers, and onion.",
            "Add lime juice, salt, and a dash of cumin.",
            "Serve with tortilla chips."
          ]
        },
        {
          name: "Yogurt Fruit Parfait",
          steps: [
            "In a glass, layer yogurt, granola, and berries or sliced fruit.",
            "Repeat to make additional layers.",
            "Top with chopped nuts or honey."
          ]
        },
        {
          name: "Pita Hummus Sandwich",
          steps: [
            "Spread hummus inside a split pita.",
            "Add shredded carrot, lettuce, and sliced cucumber.",
            "Fold and enjoy."
          ]
        },
        {
          name: "No-Bake Energy Bites",
          steps: [
            "Mix rolled oats, peanut butter, honey, and chocolate chips in a bowl.",
            "Roll into bite-size balls.",
            "Chill before eating."
          ]
        },
        {
          name: "Cold Chicken & Veggie Wrap",
          steps: [
            "Spread mayo or yogurt on a tortilla.",
            "Add sliced deli chicken, shredded lettuce, and sliced bell pepper.",
            "Wrap up and slice in half."
          ]
        }
      ]
    },

    // New category: No-Fail Recipes
    {
      id: 'no-fail-recipes',
      label: 'No-Fail Recipes',
      icon: '👍',
      description: "Foolproof recipes that always turn out right—even for absolute beginners.",
      recipes: [
        {
          name: "Classic Grilled Cheese",
          steps: [
            "Butter two slices of bread.",
            "Add cheese between the bread.",
            "Grill in a skillet until golden brown on both sides."
          ]
        },
        {
          name: "Oven-Baked Chicken Drumsticks",
          steps: [
            "Season drumsticks with salt, pepper, and a bit of oil.",
            "Arrange on a baking tray.",
            "Bake at 200°C/400°F for 30–35 minutes until cooked through."
          ]
        },
        {
          name: "Simple Vegetable Soup",
          steps: [
            "Pour vegetable broth into a pot.",
            "Add chopped carrots, celery, and onion.",
            "Simmer until veggies are tender; season with salt and herbs."
          ]
        },
        {
          name: "Banana Pancakes",
          steps: [
            "Mash a banana in a bowl.",
            "Add 2 eggs and whisk.",
            "Cook spoonfuls on a nonstick pan until golden."
          ]
        },
        {
          name: "Easy Tuna Sandwich",
          steps: [
            "Mix canned tuna with mayonnaise.",
            "Spread on bread, add lettuce if desired.",
            "Top with another bread slice and cut to serve."
          ]
        },
        {
          name: "One-Pot Pasta",
          steps: [
            "Place dry pasta, water, and a bit of salt in a pot.",
            "Bring to a boil, stirring occasionally.",
            "Add sauce and simmer until pasta is cooked."
          ]
        },
        {
          name: "Egg Salad Wrap",
          steps: [
            "Boil eggs and chop them up.",
            "Mix with mayo, salt, and pepper.",
            "Spoon into tortillas and wrap up."
          ]
        },
        {
          name: "Simple Oatmeal",
          steps: [
            "Combine oats and milk (or water) in a bowl.",
            "Microwave or simmer until thickened.",
            "Top with fruit or honey to serve."
          ]
        },
        {
          name: "Chicken Quesadilla",
          steps: [
            "Place shredded cooked chicken and cheese on half a tortilla.",
            "Fold and cook on a skillet until golden and cheese melts.",
            "Cut into triangles."
          ]
        },
        {
          name: "Easy Baked Potatoes",
          steps: [
            "Pierce potatoes with a fork.",
            "Microwave for 4–6 minutes, or bake at 200°C/400°F until soft.",
            "Split open, add butter and toppings."
          ]
        }
      ]
    },

    // New category: Fridge Cleanout Meals
    {
      id: 'fridge-cleanout-meals',
      label: 'Fridge Cleanout Meals',
      icon: '🧊',
      description: "Make the most of what's left in your fridge—zero waste, full flavor!",
      recipes: [
        {
          name: "Everything-In Omelette",
          steps: [
            "Whisk eggs in a bowl.",
            "Add chopped bits of cheese, veggies, or meats found in fridge.",
            "Pour into skillet and cook until set.",
            "Fold and serve."
          ]
        },
        {
          name: "Mystery Stir-Fry",
          steps: [
            "Cut any veggies about to expire into bite-size pieces.",
            "Stir-fry in hot oil with soy sauce and seasoning.",
            "Add leftover meat, tofu, or beans if available.",
            "Serve over rice or noodles."
          ]
        },
        {
          name: "Fridge-Foraged Sandwich",
          steps: [
            "Spread condiments on bread.",
            "Add any meats, cheeses, veggies (roasted or raw) you have.",
            "Top with lettuce/spinach and another bread slice."
          ]
        },
        {
          name: "Mixed Veggie Soup",
          steps: [
            "Dice all available vegetables.",
            "Simmer in broth until soft.",
            "Season and serve with bread."
          ]
        },
        {
          name: "Pasta Cleanout Bowl",
          steps: [
            "Cook any pasta you have.",
            "Toss with oil or sauce and random fridge veggies.",
            "Top with cheese or herbs."
          ]
        },
        {
          name: "Leftover Fried Egg Rice",
          steps: [
            "Heat oil in a pan.",
            "Add leftover rice and any small vegetables or proteins.",
            "Push aside, scramble in an egg, then mix.",
            "Season with soy sauce."
          ]
        },
        {
          name: "Anything-You-Got Salad",
          steps: [
            "Toss lettuce, greens, and any cheese, grains, or protein from fridge.",
            "Add nuts, seeds, or dried fruit if desired.",
            "Dress with olive oil and vinegar."
          ]
        },
        {
          name: "Cleanout Quesadilla",
          steps: [
            "Fill a tortilla with bits of cheese, veggies, or meats.",
            "Fold and toast on skillet until golden.",
            "Slice and enjoy."
          ]
        },
        {
          name: "Veggie Sheet Pan Roast",
          steps: [
            "Chop any leftover veggies.",
            "Toss with oil, salt, and pepper.",
            "Roast on a tray at 200°C/400°F until tender and golden."
          ]
        },
        {
          name: "Anything Mac & Cheese",
          steps: [
            "Cook macaroni and drain.",
            "Stir in cheese, milk, and anything from the fridge—like peas or ham.",
            "Mix and heat until melty."
          ]
        }
      ]
    }
  ];

  const [selectedCategoryId, setSelectedCategoryId] = React.useState(CATEGORIES[0].id);

  return (
    <div className="app" style={{ background: '#FFF9C4', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav
        className="navbar"
        style={{
          backgroundColor: '#FFD600',
          color: '#222',
          borderBottom: '1px solid #eee',
          position: 'sticky',
          top: 0,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        <div className="container" style={{ maxWidth: 1040 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo" style={{ fontWeight: 700, fontSize: '1.6rem', letterSpacing: '1px' }}>
              <span className="logo-symbol" style={{ color: '#FFD600', fontSize: '1.8rem' }}>🍳</span>
              Bachelor's Cooking
            </div>
            <nav className="main-menu" aria-label="Main navigation">
              <ul style={{
                display: 'flex',
                gap: '24px',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                fontWeight: 500,
                fontSize: '1rem'
              }}>
                <li><a href="#recipes" style={{ color: '#222', textDecoration: 'none' }}>Recipes</a></li>
                <li><a href="#build" style={{ color: '#222', textDecoration: 'none' }}>Build-a-Recipe</a></li>
                <li><a href="#about" style={{ color: '#222', textDecoration: 'none' }}>About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" style={{
        background: '#FFFDEB',
        textAlign: 'center',
        padding: '100px 0 40px 0',
        marginTop: 0,
      }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="subtitle" style={{ color: '#FFD600', fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em' }}>
            Budget‑Friendly & Beginner Recipes
          </div>
          <h1 className="title" style={{
            color: '#222',
            fontSize: '3.2rem',
            fontWeight: 800,
            marginBottom: 18,
            marginTop: 8,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            Bachelor's Cooking
          </h1>
          <div className="description" style={{
            color: '#444',
            fontSize: '1.15rem',
            margin: '0 auto 20px auto',
            maxWidth: 520,
            lineHeight: 1.55,
            fontWeight: 400
          }}>
            Simple, customizable recipes for bachelors, students, and beginners. Cook tasty meals with minimal ingredients, save money, and explore new flavors—no experience necessary!
          </div>
          <a href="#build">
            <button className="btn btn-large"
              style={{
                background: '#FFD600',
                color: '#222',
                border: 'none',
                borderRadius: 6,
                padding: '12px 32px',
                fontWeight: 600,
                fontSize: '1.05rem',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(255,214,0,0.10)'
              }}>
              Build Your Recipe
            </button>
          </a>
        </div>
      </header>

      <main>
        <div className="container" style={{ maxWidth: 1000, paddingTop: 32 }}>
          {/* Recipe Categories */}
          <section id="recipes" style={{ marginBottom: 36, background: '#FFF9C4', borderRadius: 12, padding: '24px 0', boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#FFD600', fontSize: '2rem', fontWeight: 700, marginBottom: 18, marginLeft: 24, letterSpacing: '0.01em' }}>Recipe Categories</h2>
            {/* Category selection controls */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
              {/* Dropdown for compact screens */}
              <select
                value={selectedCategoryId}
                onChange={e => setSelectedCategoryId(e.target.value)}
                style={{
                  display: 'none',
                  padding: '8px 15px',
                  borderRadius: 5,
                  border: '1.7px solid #FFD600',
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: '#FFFDEB',
                  color: '#222',
                  marginRight: 16,
                  marginBottom: 0,
                  outline: 'none',
                  boxShadow: '0 1px 5px #ffe08222'
                }}
                id="recipes-category-select"
                aria-label="Select recipe category"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.icon} {cat.label}</option>
                ))}
              </select>
              {/* Button group for most screens */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    tabIndex={0}
                    aria-pressed={selectedCategoryId === cat.id}
                    title={cat.label}
                    style={{
                      display: 'inline-block',
                      fontSize: '1.07rem',
                      fontWeight: selectedCategoryId === cat.id ? 700 : 500,
                      background: selectedCategoryId === cat.id ? '#FFD600' : '#FFFDEB',
                      color: selectedCategoryId === cat.id ? '#222' : '#9d8400',
                      border: selectedCategoryId === cat.id ? '2px solid #FFD600' : '1.5px solid #FFD600',
                      borderRadius: 7,
                      padding: '7px 18px',
                      minWidth: 90,
                      cursor: 'pointer',
                      boxShadow: selectedCategoryId === cat.id ? '0 1px 5px #ffe08255' : '0 1px 3px #ffe08222',
                      transition: 'all 0.12s',
                      outline: selectedCategoryId === cat.id ? '2px solid #FFEB3B' : 'none'
                    }}
                    onClick={() => setSelectedCategoryId(cat.id)}
                  >
                    <span aria-hidden="true" style={{ marginRight: 6 }}>{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Render the selected category only */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "stretch", minHeight: 100 }}>
              {CATEGORIES.filter(c => c.id === selectedCategoryId).map(category => (
                <CategoryCard
                  key={category.id}
                  icon={category.icon}
                  title={category.label}
                  description={category.description}
                  bgColor="#FFFDEB"
                  accentColor="#FFD600"
                  recipes={category.recipes}
                />
              ))}
            </div>
          </section>

          {/* Build-a-Recipe Tool Demo Section */}
          <section id="build" style={{
            background: 'linear-gradient(90deg, #FFFDEB 80%, #FFD600 105%)',
            borderRadius: 12,
            padding: 32,
            marginBottom: 36,
            boxShadow: '0 1px 10px rgba(255,214,0,0.10)'
          }}>
            <h2 style={{ color: '#222', fontWeight: 700, fontSize: '1.75rem', marginBottom: 14 }}>Build-a-Recipe Tool</h2>
            <div style={{ color: '#666', marginBottom: 18 }}>
              Select the ingredients you have, and we’ll generate a budget-friendly recipe you can cook!
            </div>
            <BuildARecipeTool />
          </section>

          {/* About/EasyBite Info */}
          <section id="about" style={{
            background: '#FFFFFF',
            borderRadius: 12,
            padding: 32,
            marginBottom: 32,
            boxShadow: '0 1px 8px rgba(200,200,0,0.07)'
          }}>
            <h2 style={{ color: '#FFD600', fontSize: '1.5rem', fontWeight: 700, marginBottom: 6 }}>
              About Bachelor's Cooking
            </h2>
            <div style={{ color: '#222', fontSize: '1.11rem', lineHeight: 1.6 }}>
              Bachelor's Cooking is made for those new to cooking, students, or anyone who wants delicious meals on a budget. All recipes are meant to be stress-free, customizable, and suitable for a wide variety of dietary needs. Discover, experiment, and enjoy your cooking journey!
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        color: '#888',
        background: '#FFF9C4',
        padding: '30px 0 18px 0',
        fontSize: '1.02rem'
      }}>
        &copy; {new Date().getFullYear()} Bachelor's Cooking — Budget Friendly Recipes for Beginners
      </footer>
    </div>
  );
}

/**
 * Reusable Card for Recipe Categories.
 * 
 * Refactored: Shows recipes in a responsive 3-column grid layout, wrapping extra recipes to new rows for clarity and space usage.
 * All recipe card formatting and step-by-step instructions remain clear and accessible.
 */
function CategoryCard({ icon, title, description, accentColor, bgColor, recipes }) {
  // Helper: Responsive grid for recipes (3 per row, wrapping)
  return (
    <div style={{
      flex: '1 1 180px',
      minWidth: 200,
      background: bgColor,
      borderRadius: 10,
      boxShadow: '0 1px 6px rgba(220,190,10,0.07)',
      padding: '24px 18px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      border: `1.5px solid ${accentColor}`,
      marginBottom: 10,
      maxWidth: '100%',
    }}>
      <span style={{ fontSize: '2.2rem', marginBottom: 6 }}>
        {icon}
      </span>
      <div style={{ fontWeight: 700, color: accentColor, fontSize: '1.13rem', marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ color: '#555', fontSize: '0.97rem', fontWeight: 400 }}>{description}</div>
      {Array.isArray(recipes) && (
        <div
          style={{
            width: '100%',
            marginTop: 18,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '22px 22px',
            justifyContent: 'center',
            alignItems: 'stretch',
            paddingBottom: 8,
          }}
        >
          {recipes.map((r, idx) =>
            typeof r === "string" ? (
              <div
                key={idx}
                style={{
                  minWidth: 200,
                  padding: '10px 12px',
                  background: '#FFFDEB',
                  borderRadius: 10,
                  border: `1px solid ${accentColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  boxShadow: "0 1px 5px rgba(200,170,10,0.07)",
                  height: "100%",
                  textAlign: 'left'
                }}
              >
                <div style={{ fontWeight: 600 }}>{r}</div>
              </div>
            ) : (
              <div
                key={idx}
                style={{
                  background: '#FFFDEB',
                  border: `1.5px solid ${accentColor}`,
                  borderRadius: 10,
                  boxShadow: '0 1px 8px #ffe08222',
                  padding: '15px 15px 14px 15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: 0,
                  height: '100%',
                  minWidth: 0,
                  textAlign: 'left',
                }}
              >
                {/* Name/title */}
                <div style={{
                  fontWeight: 700,
                  color: accentColor,
                  fontSize: '1.07rem',
                  marginBottom: 4,
                  letterSpacing: 0,
                }}>
                  {r.name}
                </div>
                {/* Steps: vertical numbered, clear and accessible */}
                <ol style={{
                  margin: 0,
                  padding: '0 0 0 18px',
                  listStyle: 'decimal',
                  fontSize: '0.97rem',
                  color: '#444',
                  lineHeight: 1.45,
                  fontWeight: 400,
                  textAlign: 'left'
                }}>
                  {(r.steps || []).map((step, sidx) => (
                    <li
                      key={sidx}
                      style={{
                        marginBottom: 4,
                        whiteSpace: 'normal',
                        textAlign: 'left',
                        width: '100%'
                      }}
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Build-a-Recipe Tool component.
 * This refactored tool prompts the user to select ingredients first,
 * and generates a recipe only after the user has made their selection.
 * No recipes or suggestions are shown by default, per requirements.
 */
// PUBLIC_INTERFACE
function BuildARecipeTool() {
  // List of ingredients to choose from
  const INGREDIENT_OPTIONS = [
    "Pasta",
    "Eggs",
    "Tomato",
    "Soy Sauce",
    "Rice",
    "Beans",
    "Spinach",
    "Potatoes",
    "Chicken",
    "Tofu"
  ];

  // Structured recipe options for matching (each recipe requires a subset of ingredients)
  const RECIPE_BANK = [
    {
      name: "Garlic Butter Pasta",
      required: ["Pasta"],
      steps: [
        "Cook pasta in boiling salted water until al dente.",
        "While pasta cooks, melt butter in a skillet and gently sauté minced garlic until fragrant.",
        "Drain pasta, reserving a splash of pasta water.",
        "Toss pasta with garlic butter, adding a bit of pasta water if dry. Season with salt and pepper.",
        "Serve hot, topped with grated cheese if desired."
      ]
    },
    {
      name: "Egg Fried Rice",
      required: ["Eggs", "Rice", "Soy Sauce"],
      steps: [
        "Heat oil in a pan/wok, scramble eggs and set aside.",
        "In same pan, add a bit more oil and stir-fry cooked rice until hot.",
        "Add in thawed peas/carrot mix and the scrambled eggs.",
        "Season with soy sauce, mixing well.",
        "Serve garnished with spring onions."
      ]
    },
    {
      name: "Chickpea Spinach Sauté",
      required: ["Beans", "Spinach"],
      steps: [
        "Heat oil, sauté garlic and onion until soft.",
        "Add chickpeas, cook 2–3 min.",
        "Stir in spinach until wilted.",
        "Season with lemon, salt, pepper. Serve hot."
      ]
    },
    {
      name: "Peanut Butter Noodle Bowl",
      required: ["Pasta", "Soy Sauce"],
      steps: [
        "Cook noodles as per package directions.",
        "Whisk together peanut butter, soy sauce, a squeeze of lime, and a splash of water.",
        "Toss cooked noodles with sauce and sliced cucumber or carrots.",
        "Serve garnished with sesame seeds."
      ]
    },
    {
      name: "Avocado Toast Deluxe",
      required: ["Tomato"],
      steps: [
        "Toast whole grain bread.",
        "Mash ripe avocado with lemon, salt, pepper.",
        "Spread mash over toast, top with sliced tomato or radish.",
        "Sprinkle optional chili flakes or seeds.",
        "Serve immediately."
      ]
    },
    {
      name: "Red Lentil Curry",
      required: ["Beans"],
      steps: [
        "Sauté onion and curry powder in pot.",
        "Add rinsed red lentils, coconut milk, and water.",
        "Simmer until lentils are soft, 15–20 min.",
        "Season with salt, sprinkle with cilantro."
      ]
    },
    {
      name: "Tuna Mayo Rice Bowl",
      required: ["Rice"],
      steps: [
        "Cook rice according to package.",
        "Mix canned tuna with mayonnaise, pinch of salt and pepper.",
        "Serve tuna mixture over hot rice, add sliced cucumber or corn if desired.",
        "Garnish with green onions."
      ]
    },
    {
      name: "Tofu Scramble Wrap",
      required: ["Tofu"],
      steps: [
        "Crumble firm tofu into a pan with oil.",
        "Add turmeric, salt, pepper, and diced veggies.",
        "Sauté 5–7 min, spoon into a wrap with salsa.",
        "Roll and enjoy."
      ]
    },
    {
      name: "Black Bean Stuffed Peppers",
      required: ["Beans"],
      steps: [
        "Halve and deseed bell peppers.",
        "Mix black beans, corn, salsa, and cumin.",
        "Fill peppers, bake at 180°C/350°F for 20–25 min.",
        "Serve topped with avocado if desired."
      ]
    }
  ];

  const [selected, setSelected] = React.useState([]);
  const [results, setResults] = React.useState(null);
  const [touched, setTouched] = React.useState(false);

  // Toggle ingredient in the selected array
  const toggleIngredient = (ing) => {
    setTouched(true);
    setSelected((sel) =>
      sel.includes(ing) ? sel.filter((i) => i !== ing) : [...sel, ing]
    );
  };

  // Find recipes matching at least the selected ingredients
  const findRecipes = () => {
    if (!selected.length) {
      setResults([]);
      return;
    }
    // For simplicity, recipes that all their required ingredients are included in selected
    const found = RECIPE_BANK.filter(recipe =>
      recipe.required.every(req => selected.includes(req))
    );
    setResults(found);
  };

  // UI: selection form, then show recipes if found
  return (
    <div
      style={{
        background: '#FFF',
        padding: '20px 18px',
        borderRadius: 8,
        boxShadow: '0 1px 6px rgba(34,34,34,0.06)',
        width: '100%',
        maxWidth: 490,
        margin: '0 auto'
      }}
    >
      {/* Ingredient selection */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px 12px',
        justifyContent: 'center',
        marginBottom: 8
      }}>
        {INGREDIENT_OPTIONS.map((ingredient) => (
          <button
            key={ingredient}
            type="button"
            tabIndex={0}
            onClick={() => toggleIngredient(ingredient)}
            aria-pressed={selected.includes(ingredient)}
            style={{
              background: selected.includes(ingredient) ? "#FFD600" : "#FFF9C4",
              color: "#222",
              border: selected.includes(ingredient) ? '2px solid #FFD600' : '1px solid #FFD600',
              borderRadius: 4,
              padding: '6px 16px',
              cursor: "pointer",
              fontWeight: 500,
              outline: selected.includes(ingredient)
                ? "2px solid #FFEB3B"
                : "none",
              transition: "all 0.13s",
              boxShadow: selected.includes(ingredient)
                ? "0 0 2px #FFD600"
                : "none",
            }}
          >
            {ingredient}
          </button>
        ))}
      </div>
      <button
        className="btn"
        style={{
          background: '#FFD600',
          color: '#222',
          fontWeight: 600,
          fontSize: '1rem',
          width: '100%',
          marginTop: 10,
          marginBottom: 2,
        }}
        disabled={!selected.length}
        onClick={findRecipes}
        aria-disabled={!selected.length}
      >
        {selected.length ? "Show Recipes" : "Select Ingredients"}
      </button>

      {/* Results Section (shown only after Find is pressed) */}
      {results && (
        <div style={{ marginTop: 18 }}>
          {results.length === 0 ? (
            <div style={{ color: '#C62828', fontWeight: 500 }}>
              {touched
                ? "No recipes found with the selected ingredients."
                : "Select ingredients to build a recipe."}
            </div>
          ) : (
            <>
              <div style={{
                fontWeight: 600,
                color: '#222',
                marginBottom: 5,
                fontSize: '1.07rem'
              }}>
                Recipes you can make:
              </div>
              <ul style={{
                paddingLeft: 0,
                margin: 0,
                listStyle: "none"
              }}>
                {results.map((recipe, idx) => (
                  <li
                    key={recipe.name}
                    style={{
                      background: "#FFFDEB",
                      border: "1.5px solid #FFD600",
                      borderRadius: 6,
                      padding: "10px 12px",
                      marginBottom: 7,
                      fontSize: "0.98rem",
                      color: "#212121" // Ensures highly contrasting recipe/output text
                    }}
                  >
                    <div style={{
                      fontWeight: 700,
                      color: "#FFD600",
                      marginBottom: 4
                    }}>{recipe.name}</div>
                    <ol style={{ paddingLeft: 19, margin: 0 }}>
                      {(recipe.steps || []).map((step, sidx) => (
                        <li key={sidx} style={{ marginBottom: 1, color: "#333" }}>{step}</li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
