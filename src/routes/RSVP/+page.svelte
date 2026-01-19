<script lang="ts">
	import { supabase } from '$lib/supabase';

	let formData = {
		name: '',
		surname: '',
		phone: '',
		attending: 'yes',
		message: ''
	};

	let submitted = false;
	let isLoading = false;
	let error = '';

	async function handleSubmit() {
		isLoading = true;
		error = '';

		try {
			// Concatenate first name and surname
			const fullName = `${formData.name} ${formData.surname}`;
            const { data: existing, error: checkError } = await supabase
                .from('Guest List')
                .select('Name')
                .eq('Name', fullName)
                .maybeSingle();

            if (existing) {
               console.error('Supabase error:', fullName);
               error = 'Failed to submit RSVP as you have already submitted one. Please contact us if you need to make changes.';
				isLoading = false;
				return; 
            }
			// Insert data into Supabase
			const { data, error: insertError } = await supabase
				.from('Guest List')
				.insert([
					{
						Name: fullName,
						PhoneNumber: formData.phone,
						Attending: formData.attending === 'yes',
						message: formData.message,
						created_at: new Date().toISOString()
					}
				]).select();

			if (insertError) {
				console.error('Supabase error:', insertError);
				error = 'Failed to submit RSVP. Please try again.';
				isLoading = false;
				return;
			}

			submitted = true;
			isLoading = false;
			console.log('RSVP submitted successfully:', data);
		} catch (err) {
			console.error('Error:', err);
			error = 'An unexpected error occurred.';
			isLoading = false;
		}
	}
</script>

<div class="w-full max-w-2xl mx-auto p-6">
	<h1 class="text-[32px] md:text-[48px] font-alex text-black mb-8 text-center">RSVP</h1>

	{#if submitted}
		<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center mb-6">
			<p class="text-lg font-semibold">Thank you for your RSVP!</p>
			<p class="text-sm mt-2">We look forward to celebrating with you.</p>
		</div>
	{/if}

	{#if error}
		<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center mb-6">
			<p class="text-sm">{error}</p>
		</div>
	{/if}

	<form on:submit|preventDefault={handleSubmit} class="space-y-6">
		<!-- Name -->
		<div>
			<label for="name" class="block text-sm font-semibold text-gray-800 mb-2">First Name *</label>
			<input
				type="text"
				id="name"
				bind:value={formData.name}
				required
				class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 text-black"
				placeholder="Enter your first name"
			/>
		</div>

		<!-- Surname -->
		<div>
			<label for="surname" class="block text-sm font-semibold text-gray-800 mb-2">Last Name *</label>
			<input
				type="text"
				id="surname"
				bind:value={formData.surname}
				required
				class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 text-black"
				placeholder="Enter your last name"
			/>
		</div>

		<!-- Phone Number -->
		<div>
			<label for="phone" class="block text-sm font-semibold text-gray-800 mb-2">Phone Number *</label>
			<input
				type="tel"
				id="phone"
				bind:value={formData.phone}
				required
				class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 text-black"
				placeholder="Enter your phone number"
			/>
		</div>

		<!-- Attendance -->
		<div>
			<label class="block text-sm font-semibold text-gray-800 mb-3">Will you be attending? *</label>
			<div class="flex gap-6">
				<label class="flex items-center">
					<input
						type="radio"
						name="attending"
						value="yes"
						bind:group={formData.attending}
						class="w-4 h-4 text-rose-500 accent-rose-500"
					/>
					<span class="ml-2 text-gray-800">Yes, I'm coming</span>
				</label>
				<label class="flex items-center">
					<input
						type="radio"
						name="attending"
						value="no"
						bind:group={formData.attending}
						class="w-4 h-4 text-rose-500 accent-rose-500"
					/>
					<span class="ml-2 text-gray-800">Sorry, I can't make it</span>
				</label>
			</div>
		</div>

		<!-- Wishes Message -->
		<div>
			<label for="message" class="block text-sm font-semibold text-gray-800 mb-2">Wish us well</label>
			<textarea
				id="message"
				bind:value={formData.message}
				rows="4"
				class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 text-black"
				placeholder="Share your best wishes or a special message..."
			></textarea>
		</div>

		<!-- Submit Button -->
		<div class="flex gap-4 justify-center pt-4">
			<button
				type="submit"
				disabled={isLoading || submitted}
				class="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-8 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{isLoading ? 'Submitting...' : 'Submit RSVP'}
			</button>
			<a
				href="/"
				class="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-8 rounded-lg transition text-center"
			>
				Back Home
			</a>
		</div>
	</form>
</div>


