load_sample :bd_fat
use_synth :prophet




define :mysynth do
  use_synth :dsaw
  play [:A, :F, :G], attack: 0.2, release: 1
  sleep 0.2
  play :A
end

define :pianofx do
  with_fx :reverb do
    use_synth :piano
    
    play [ :A3, :G3 ].tick, amp: 0.6, release: 0.1
    sleep 0.2
    
  end
end

define :mainsynth do
  use_synth :prophet
  
  8.times do
    play [ :A3, :F3 ].tick
    sleep 0.2
  end
  
  8.times do
    play [ :G3, :B3 ].tick
    sleep 0.2
    
  end
  
  8.times do
    play [ :A4, :F4 ].tick
    sleep 0.2
  end
end

define :mysynth2 do
  8.times do
    play [ :A3, :F3].tick
    sleep 0.2
  end
end

define :mysynth3 do
  24.times do
    play [ :G3, :F3 ].tick
    sleep 0.2
    
  end
end



live_loop :peform do
  
  puts "Synth Perform"
  
  mainsynth
  sleep 0.2
  use_synth :piano
  play (ring :e3, :f3).tick
  
  
end

live_loop :performdrums do
  use_synth :piano
  puts "Perform drums"
  
  play [ :F3, :C3 ].tick, amp: 0.8
  sleep 0.2
  play [ :A3, :G3, ].tick, amp: 0.6, attack: 0.2, release: 0.6
  #sleep 0.2
  play chord(:F3, :m7), amp: 0.8
  #sleep 0.2
  
  
end



