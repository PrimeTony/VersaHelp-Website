function showForm(service) {
    const formContent = document.getElementById('form-content');
    let formHTML = '';

    switch (service) {
        case 'gardening':
            formHTML = `
                <h2>Gardening Booking Form</h2>
                <form>
                    <label for="fullnames">Full Names:</label>
                    <input type="text" id="fullnames" name="fullnames" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="address">Physical Address:</label>
                    <input type="text" id="address" name="address" required>

                    <label for="date">Date you're booking for:</label>
                    <input type="date" id="date" name="date" required>

                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" required>

                    <button type="submit">Book Now</button>
                </form>`;
            break;
        case 'house-cleaning':
            formHTML = `
                <h2>House Cleaning Booking Form</h2>
                <form>
                    <label for="fullnames">Full Names:</label>
                    <input type="text" id="fullnames" name="fullnames" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="address">Physical Address:</label>
                    <input type="text" id="address" name="address" required>

                    <label for="date">Date you're booking for:</label>
                    <input type="date" id="date" name="date" required>

                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" required>

                    <label for="indoor-outdoor">Indoors or Outdoors or Both:</label>
                    <select id="indoor-outdoor" name="indoor-outdoor" required>
                        <option value="indoors">Indoors</option>
                        <option value="outdoors">Outdoors</option>
                        <option value="both">Both</option>
                    </select>

                    <label for="number-cleaners">Number of Cleaners Needed:</label>
                    <input type="number" id="number-cleaners" name="number-cleaners" required>

                    <button type="submit">Book Now</button>
                </form>`;
            break;
        case 'laundry':
            formHTML = `
                <h2>Laundry Booking Form</h2>
                <form>
                    <label for="fullnames">Full Names:</label>
                    <input type="text" id="fullnames" name="fullnames" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="address">Physical Address:</label>
                    <input type="text" id="address" name="address" required>

                    <label for="date">Date you're booking for:</label>
                    <input type="date" id="date" name="date" required>

                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" required>

                    <label for="wash-type">Hand Wash or Washing Machine or Both:</label>
                    <select id="wash-type" name="wash-type" required>
                        <option value="hand-wash">Hand Wash</option>
                        <option value="washing-machine">Washing Machine</option>
                        <option value="both">Both</option>
                    </select>

                    <label for="number-helpers">Number of Helpers Needed:</label>
                    <input type="number" id="number-helpers" name="number-helpers" required>

                    <button type="submit">Book Now</button>
                </form>`;
            break;
        case 'ironing':
            formHTML = `
                <h2>Ironing Booking Form</h2>
                <form>
                    <label for="fullnames">Full Names:</label>
                    <input type="text" id="fullnames" name="fullnames" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="address">Physical Address:</label>
                    <input type="text" id="address" name="address" required>

                    <label for="date">Date you're booking for:</label>
                    <input type="date" id="date" name="date" required>

                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" required>

                    <button type="submit">Book Now</button>
                </form>`;
            break;
        default:
            formHTML = '<p>Please select a service to book.</p>';
            break;
    }

    formContent.innerHTML = formHTML;
}
