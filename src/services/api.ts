/**
 * Fetches a random fact from the Cat Facts API
 * @returns Promise resolving to the fact data
 */
export const fetchRandomFact = async (): Promise<{ fact: string }> => {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching fact:', error);
    throw error;
  }
};